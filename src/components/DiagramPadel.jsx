import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const PYTHON_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
const FLASK_LOGO  = 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flask_logo.svg'
const PG_LOGO     = 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'
const FFT_LOGO    = 'https://upload.wikimedia.org/wikipedia/fr/thumb/b/b9/Logo_FFT.svg/1200px-Logo_FFT.svg.png'

const GR='#059669', VI='#7c3aed'
const QUEUE_COLORS=['#f59e0b','#3b82f6','#10b981','#ef4444']
const QUEUE_LABELS=['pending','processing','done','error']

// Layout: two rows, nodes spread evenly across W=780
const W=860, H=260, CY1=78, CY2=192

// Row 1: TenUp → Scraper → PostgreSQL  (gaps ~50px)
const T1X=10, T1W=108, T1H=48, T1Y=CY1-T1H/2
const P1X=166, P1W=290, P1H=130, P1Y=10, P1R=P1X+P1W, PHDR=34
const DB_X=510, DB_W=116, DB_H=68, DB_Y=CY1-DB_H/2, DB_CX=DB_X+DB_W/2

// Row 2: Cron → Flask → nginx → Dashboard → Docker
const C2X=10,  C2W=88,  C2H=42, C2Y=CY2-C2H/2
const F2X=146, F2W=118, F2H=62, F2Y=CY2-F2H/2, F2CX=F2X+F2W/2
const N2X=314, N2W=80,  N2H=42, N2Y=CY2-N2H/2, N2CX=N2X+N2W/2
const D2X=444, D2W=130, D2H=62, D2Y=CY2-D2H/2, D2CX=D2X+D2W/2
const DK_X=626, DK_W=102, DK_H=42, DK_Y=CY2-DK_H/2

const pT  = `M ${T1X+T1W},${CY1} L ${P1X},${CY1}`
const pDB = `M ${P1R},${CY1} L ${DB_X},${CY1}`
const pDF = `M ${DB_CX},${DB_Y+DB_H} C ${DB_CX},${CY2+48} ${F2CX},${CY2+48} ${F2CX},${F2Y+F2H}`
const pCF = `M ${C2X+C2W},${CY2} L ${F2X},${CY2}`
const pFN = `M ${F2X+F2W},${CY2} L ${N2X},${CY2}`
const pND = `M ${N2X+N2W},${CY2} L ${D2X},${CY2}`
const pDK = `M ${D2X+D2W},${CY2} L ${DK_X},${CY2}`

function WorkflowSVG({ uid='a' }) {
  const a = `pd${uid}`
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{display:'block',overflow:'visible'}}>
      <defs>
        <style>{`@keyframes ${a}{to{stroke-dashoffset:-20}}`}</style>
        <filter id={`${uid}-fg`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id={`${uid}-fv`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <path id={`${uid}-t`}  d={pT}/>
        <path id={`${uid}-db`} d={pDB}/>
        <path id={`${uid}-df`} d={pDF}/>
        <path id={`${uid}-cf`} d={pCF}/>
        <path id={`${uid}-fn`} d={pFN}/>
        <path id={`${uid}-nd`} d={pND}/>
        <path id={`${uid}-dk`} d={pDK}/>
      </defs>

      {/* Lines — thick + animated dash */}
      {[
        [`${uid}-t`,  GR, '0s'],
        [`${uid}-db`, GR, '0.25s'],
        [`${uid}-cf`, VI, '0s'],
        [`${uid}-fn`, VI, '0.2s'],
        [`${uid}-nd`, VI, '0.4s'],
        [`${uid}-dk`, VI, '0.6s'],
      ].map(([ref,clr,delay])=>(
        <g key={ref}>
          <use href={`#${ref}`} fill="none" stroke="var(--border)" strokeWidth="3"/>
          <use href={`#${ref}`} fill="none" stroke={clr} strokeWidth="3" strokeOpacity="0.72"
            strokeDasharray="6 5" style={{animation:`${a} 0.85s linear infinite`,animationDelay:delay}}/>
        </g>
      ))}
      <use href={`#${uid}-df`} fill="none" stroke={GR} strokeWidth="1.5" strokeOpacity="0.18" strokeDasharray="4 7"/>

      {/* Dots — small, glowing */}
      {[
        [`${uid}-t`,  GR, `${uid}-fg`, '1.1s','0s'],
        [`${uid}-db`, GR, `${uid}-fg`, '1.3s','0.3s'],
        [`${uid}-cf`, VI, `${uid}-fv`, '1.0s','0s'],
        [`${uid}-fn`, VI, `${uid}-fv`, '0.9s','0.22s'],
        [`${uid}-nd`, VI, `${uid}-fv`, '1.1s','0.44s'],
        [`${uid}-dk`, VI, `${uid}-fv`, '1.0s','0.66s'],
      ].map(([href,clr,filt,dur,begin])=>(
        <circle key={href} r="2.5" fill={clr} filter={`url(#${filt})`}>
          <animateMotion dur={dur} repeatCount="indefinite" begin={begin}>
            <mpath href={`#${href}`}/>
          </animateMotion>
        </circle>
      ))}

      {/* Junction dots */}
      {[[P1X,CY1,GR],[P1R,CY1,GR],[DB_X,CY1,GR],
        [F2X,CY2,VI],[F2X+F2W,CY2,VI],[N2X+N2W,CY2,VI],[D2X+D2W,CY2,VI]].map(([cx,cy,clr],i)=>(
        <circle key={i} cx={cx} cy={cy} r="2.5" fill={clr} opacity="0.85"/>
      ))}

      {/* Separator */}
      <line x1={10} y1={(CY1+CY2)/2} x2={W-10} y2={(CY1+CY2)/2}
        stroke="var(--border)" strokeWidth="1" strokeDasharray="3 8"/>

      {/* TenUp */}
      <rect x={T1X} y={T1Y} width={T1W} height={T1H} rx={9}
        fill="rgba(5,150,105,0.06)" stroke="rgba(5,150,105,0.22)" strokeWidth="1"/>
      <image href={FFT_LOGO} x={T1X+6} y={CY1-11} width={22} height={22}/>
      <text x={T1X+32} y={CY1-3} fontSize="10.5" fontWeight="600" fill="var(--ink)" fontFamily="system-ui,sans-serif">TenUp</text>
      <text x={T1X+32} y={CY1+11} fontSize="7.5" fill="var(--low)" fontFamily="monospace">API non-doc</text>

      {/* Scraper panel */}
      <rect x={P1X} y={P1Y} width={P1W} height={P1H} rx={11}
        fill="var(--white)" stroke="var(--border)" strokeWidth="1"/>
      <rect x={P1X} y={P1Y} width={P1W} height={PHDR} rx={11}
        fill="rgba(5,150,105,0.05)"/>
      <rect x={P1X} y={P1Y+PHDR-1} width={P1W} height={1} fill="var(--border)"/>
      <image href={PYTHON_LOGO} x={P1X+12} y={P1Y+7} width={20} height={20}/>
      <text x={P1X+38} y={P1Y+20} fontSize="9" fontWeight="700" letterSpacing="1.5"
        fill={GR} fontFamily="monospace">SCRAPER HTTP</text>
      <text x={P1R-12} y={P1Y+20} fontSize="7.5" fill="var(--low)" fontFamily="monospace" textAnchor="end">15 workers async</text>

      {/* Queue — compact pills */}
      {QUEUE_LABELS.map((lbl,i)=>{
        const col=P1W/4, cx=P1X+i*col+col/2, cy=P1Y+PHDR+(P1H-PHDR)/2
        return (
          <g key={lbl}>
            <circle cx={cx} cy={cy-12} r="5" fill={QUEUE_COLORS[i]} opacity="0.85"/>
            <text x={cx} y={cy+4} textAnchor="middle" fontSize="9" fontWeight="500"
              fill="var(--ink)" fontFamily="monospace">{lbl}</text>
          </g>
        )
      })}

      {/* PostgreSQL */}
      <rect x={DB_X} y={DB_Y} width={DB_W} height={DB_H} rx={9}
        fill="rgba(5,150,105,0.06)" stroke="rgba(5,150,105,0.22)" strokeWidth="1"/>
      <image href={PG_LOGO} x={DB_CX-12} y={DB_Y+6} width={24} height={24}/>
      <text x={DB_CX} y={DB_Y+42} textAnchor="middle" fontSize="10" fontWeight="600"
        fill="var(--ink)" fontFamily="system-ui,sans-serif">PostgreSQL</text>
      <text x={DB_CX} y={DB_Y+56} textAnchor="middle" fontSize="7.5"
        fill="var(--low)" fontFamily="monospace">156k joueurs</text>

      {/* Cron */}
      <rect x={C2X} y={C2Y} width={C2W} height={C2H} rx={9}
        fill="rgba(124,58,237,0.06)" stroke="rgba(124,58,237,0.22)" strokeWidth="1"/>
      <text x={C2X+C2W/2} y={CY2-2} textAnchor="middle" fontSize="13">&#x1F4C5;</text>
      <text x={C2X+C2W/2} y={CY2+13} textAnchor="middle" fontSize="7.5"
        fill="var(--low)" fontFamily="monospace">1er mardi/mois</text>

      {/* Flask */}
      <rect x={F2X} y={F2Y} width={F2W} height={F2H} rx={9}
        fill="rgba(124,58,237,0.06)" stroke="rgba(124,58,237,0.22)" strokeWidth="1"/>
      <image href={FLASK_LOGO} x={F2CX-11} y={F2Y+6} width={22} height={22}/>
      <text x={F2CX} y={F2Y+40} textAnchor="middle" fontSize="10" fontWeight="600"
        fill="var(--ink)" fontFamily="system-ui,sans-serif">Flask API</text>
      <text x={F2CX} y={F2Y+53} textAnchor="middle" fontSize="7.5"
        fill="var(--low)" fontFamily="monospace">REST · H/F</text>

      {/* nginx */}
      <rect x={N2X} y={N2Y} width={N2W} height={N2H} rx={9}
        fill="rgba(124,58,237,0.06)" stroke="rgba(124,58,237,0.22)" strokeWidth="1"/>
      <text x={N2CX} y={CY2-1} textAnchor="middle" fontSize="10" fontWeight="600"
        fill="var(--ink)" fontFamily="monospace">nginx</text>
      <text x={N2CX} y={CY2+12} textAnchor="middle" fontSize="7.5"
        fill="var(--low)" fontFamily="monospace">proxy</text>

      {/* Dashboard */}
      <rect x={D2X} y={D2Y} width={D2W} height={D2H} rx={9}
        fill="rgba(124,58,237,0.06)" stroke="rgba(124,58,237,0.22)" strokeWidth="1"/>
      <text x={D2CX} y={D2Y+22} textAnchor="middle" fontSize="14">&#x1F3BE;</text>
      <text x={D2CX} y={D2Y+40} textAnchor="middle" fontSize="10" fontWeight="600"
        fill="var(--ink)" fontFamily="system-ui,sans-serif">Dashboard</text>
      <text x={D2CX} y={D2Y+53} textAnchor="middle" fontSize="7.5"
        fill="var(--low)" fontFamily="monospace">HTML/JS</text>

      {/* Docker — inline dans le flux */}
      <rect x={DK_X} y={DK_Y} width={DK_W} height={DK_H} rx={9}
        fill="rgba(5,150,105,0.05)" stroke="rgba(5,150,105,0.18)" strokeWidth="0.8" strokeDasharray="4 3"/>
      <text x={DK_X+DK_W/2} y={CY2-2} textAnchor="middle" fontSize="9.5" fontWeight="600"
        fill={GR} fontFamily="monospace">Docker</text>
      <text x={DK_X+DK_W/2} y={CY2+11} textAnchor="middle" fontSize="7.5"
        fill="var(--low)" fontFamily="monospace">nginx · Render</text>
    </svg>
  )
}

function DiagramCard({ uid, onExpand }) {
  return (
    <div style={{background:'var(--white)',border:'1px solid var(--border)',borderRadius:12,padding:'16px 20px 20px',marginBottom:28}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
        <span style={{fontSize:9,letterSpacing:3,textTransform:'uppercase',color:'var(--lilas)',fontWeight:700,fontFamily:'monospace'}}>Architecture</span>
        {onExpand && (
          <button onClick={onExpand} style={{all:'unset',fontSize:11,color:'var(--low)',cursor:'pointer',fontFamily:'monospace',textDecoration:'underline',textUnderlineOffset:3}}>
            Agrandir
          </button>
        )}
      </div>
      <WorkflowSVG uid={uid}/>
    </div>
  )
}

export default function DiagramPadel() {
  const [expanded,setExpanded]=useState(false)
  useEffect(()=>{
    if(!expanded)return
    const fn=e=>{if(e.key==='Escape')setExpanded(false)}
    document.addEventListener('keydown',fn)
    return()=>document.removeEventListener('keydown',fn)
  },[expanded])
  return (
    <>
      <DiagramCard uid="pd-i" onExpand={()=>setExpanded(true)}/>
      {expanded&&createPortal(
        <div onClick={()=>setExpanded(false)} style={{position:'fixed',inset:0,zIndex:9999,background:'rgba(0,0,0,0.4)',display:'flex',alignItems:'center',justifyContent:'center',padding:'4vw'}}>
          <div onClick={e=>e.stopPropagation()} style={{width:'100%',maxWidth:1320,background:'var(--cream)',border:'1px solid var(--border)',borderRadius:16,padding:'24px 40px 36px',boxShadow:'0 32px 80px rgba(0,0,0,0.1)'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:28}}>
              <span style={{fontSize:9,letterSpacing:3,textTransform:'uppercase',color:'var(--lilas)',fontWeight:700,fontFamily:'monospace'}}>Architecture — Padel Rankings FFT</span>
              <button onClick={()=>setExpanded(false)} style={{all:'unset',width:28,height:28,borderRadius:'50%',border:'1px solid var(--border)',background:'var(--white)',cursor:'pointer',fontSize:16,color:'var(--mid)',display:'flex',alignItems:'center',justifyContent:'center',lineHeight:1}}>{'×'}</button>
            </div>
            <WorkflowSVG uid="pd-m"/>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
