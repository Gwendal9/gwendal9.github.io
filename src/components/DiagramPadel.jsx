import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const PYTHON_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
const FLASK_LOGO  = 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flask_logo.svg'
const PG_LOGO     = 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'
const DOCKER_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg'
const FFT_LOGO    = 'https://upload.wikimedia.org/wikipedia/fr/thumb/b/b9/Logo_FFT.svg/1200px-Logo_FFT.svg.png'

const GR = '#059669', GRB = 'rgba(5,150,105,0.22)', GRL = 'rgba(5,150,105,0.08)'
const VI = '#7c3aed', VIB = 'rgba(124,58,237,0.22)'
const INK = '#1a1a1a', LOW = '#7a7068', BRD = '#d8cfc2'

const QUEUE_STATES = ['pending','processing','done','error']
const QUEUE_COLORS = ['#d97706','#2563eb','#059669','#dc2626']

const W=780, H=270, CY1=82, CY2=200
const T1X=8,T1Y=CY1-26,T1W=114,T1H=52
const P1X=138,P1Y=10,P1W=296,P1H=136,P1R=P1X+P1W
const DB1X=452,DB1Y=CY1-40,DB1W=128,DB1H=80,DB1CX=DB1X+DB1W/2
const C2X=8,C2Y=CY2-20,C2W=100,C2H=40
const F2X=124,F2Y=CY2-38,F2W=124,F2H=76,F2CX=F2X+F2W/2
const N2X=268,N2Y=CY2-24,N2W=84,N2H=48,N2CX=N2X+N2W/2
const D2X=372,D2Y=CY2-38,D2W=144,D2H=76,D2CX=D2X+D2W/2
const DK2X=530,DK2Y=CY2-30,DK2W=116,DK2H=60

const pT=`M ${T1X+T1W},${CY1} L ${P1X},${CY1}`
const pDB=`M ${P1R},${CY1} L ${DB1X},${CY1}`
const pDF=`M ${DB1CX},${DB1Y+DB1H} C ${DB1CX},${CY2+50} ${F2CX},${CY2+50} ${F2CX},${F2Y+F2H}`
const pCF=`M ${C2X+C2W},${CY2} L ${F2X},${CY2}`
const pFN=`M ${F2X+F2W},${CY2} L ${N2X},${CY2}`
const pND=`M ${N2X+N2W},${CY2} L ${D2X},${CY2}`

function WorkflowSVG({ uid='a' }) {
  const anim = `pd${uid}`
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{display:'block',overflow:'visible'}}>
      <defs>
        <style>{`@keyframes ${anim}{to{stroke-dashoffset:-20}}`}</style>
        <path id={`${uid}-t`} d={pT}/>
        <path id={`${uid}-db`} d={pDB}/>
        <path id={`${uid}-df`} d={pDF}/>
        <path id={`${uid}-cf`} d={pCF}/>
        <path id={`${uid}-fn`} d={pFN}/>
        <path id={`${uid}-nd`} d={pND}/>
      </defs>

      {[[`${uid}-t`,GR,'0s'],[`${uid}-db`,GR,'0.3s'],[`${uid}-cf`,VI,'0s'],[`${uid}-fn`,VI,'0.25s'],[`${uid}-nd`,VI,'0.5s']].map(([ref,stroke,delay])=>(
        <g key={ref}>
          <use href={`#${ref}`} fill="none" stroke={BRD} strokeWidth="1.5"/>
          <use href={`#${ref}`} fill="none" stroke={stroke} strokeWidth="1.5" strokeOpacity="0.5"
            strokeDasharray="5 5" style={{animation:`${anim} 0.85s linear infinite`,animationDelay:delay}}/>
        </g>
      ))}
      <use href={`#${uid}-df`} fill="none" stroke={GR} strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 6"/>

      {[[`${uid}-t`,GR,'1.1s','0s'],[`${uid}-db`,GR,'1.3s','0.4s'],[`${uid}-cf`,VI,'1.0s','0s'],[`${uid}-fn`,VI,'0.9s','0.3s'],[`${uid}-nd`,VI,'1.1s','0.6s']].map(([href,fill,dur,begin])=>(
        <circle key={href} r="3.5" fill={fill} opacity="0.8">
          <animateMotion dur={dur} repeatCount="indefinite" begin={begin}><mpath href={`#${href}`}/></animateMotion>
        </circle>
      ))}

      <circle cx={P1X} cy={CY1} r="4" fill={GR} opacity="0.7"/>
      <circle cx={P1R} cy={CY1} r="4" fill={GR} opacity="0.7"/>
      <circle cx={DB1X} cy={CY1} r="4" fill={GR} opacity="0.7"/>
      <circle cx={DB1CX} cy={DB1Y+DB1H} r="3.5" fill={GR} opacity="0.4"/>
      <circle cx={F2X} cy={CY2} r="4" fill={VI} opacity="0.7"/>
      <circle cx={F2X+F2W} cy={CY2} r="4" fill={VI} opacity="0.7"/>
      <circle cx={N2X+N2W} cy={CY2} r="4" fill={VI} opacity="0.7"/>

      {/* TenUp */}
      <rect x={T1X} y={T1Y} width={T1W} height={T1H} rx={10} fill="var(--white)" stroke={GRB} strokeWidth="1.2"/>
      <image href={FFT_LOGO} x={T1X+6} y={CY1-16} width={30} height={30}/>
      <text x={T1X+42} y={CY1-4} fontSize="11" fontWeight="700" fill={INK} fontFamily="system-ui,sans-serif">TenUp</text>
      <text x={T1X+42} y={CY1+10} fontSize="8.5" fill={LOW} fontFamily="monospace">API non-doc</text>

      {/* Scraper panel */}
      <rect x={P1X} y={P1Y} width={P1W} height={P1H} rx={11} fill="var(--cream2)" stroke={GRB} strokeWidth="1.2" strokeDasharray="8 4"/>
      <image href={PYTHON_LOGO} x={P1X+12} y={P1Y+10} width={20} height={20}/>
      <text x={P1X+38} y={P1Y+24} fontSize="10" fontWeight="700" letterSpacing="2" fill={GR} fontFamily="monospace">SCRAPER HTTP</text>
      <text x={P1R-12} y={P1Y+24} fontSize="8.5" fill={LOW} fontFamily="monospace" textAnchor="end">15 workers async</text>
      <line x1={P1X+1} y1={P1Y+38} x2={P1R-1} y2={P1Y+38} stroke={BRD} strokeWidth="1"/>

      {QUEUE_STATES.map((state,i)=>{
        const col=P1W/4, cx=P1X+i*col+col/2, cy=P1Y+38+(P1H-38)/2
        return (
          <g key={state}>
            <circle cx={cx} cy={cy-16} r="6" fill={QUEUE_COLORS[i]} opacity="0.9"/>
            <text x={cx} y={cy+4} textAnchor="middle" fontSize="10" fontWeight="700" fill={INK} fontFamily="monospace">{state}</text>
          </g>
        )
      })}

      {/* PostgreSQL */}
      <rect x={DB1X} y={DB1Y} width={DB1W} height={DB1H} rx={10} fill="var(--white)" stroke={GRB} strokeWidth="1.2"/>
      <image href={PG_LOGO} x={DB1CX-15} y={DB1Y+8} width={30} height={30}/>
      <text x={DB1CX} y={DB1Y+52} textAnchor="middle" fontSize="11" fontWeight="700" fill={INK} fontFamily="system-ui,sans-serif">PostgreSQL</text>
      <text x={DB1CX} y={DB1Y+67} textAnchor="middle" fontSize="8.5" fill={LOW} fontFamily="monospace">156k joueurs</text>

      <text x={W-10} y={CY1+4} textAnchor="end" fontSize="9" fill={GR} fontFamily="monospace" fillOpacity="0.55">scraping pipeline</text>

      <line x1={8} y1={(CY1+CY2)/2} x2={W-8} y2={(CY1+CY2)/2} stroke={BRD} strokeWidth="1" strokeDasharray="4 8"/>

      {/* Cron */}
      <rect x={C2X} y={C2Y} width={C2W} height={C2H} rx={9} fill="var(--white)" stroke={VIB} strokeWidth="1.2"/>
      <text x={C2X+C2W/2} y={CY2-2} textAnchor="middle" fontSize="14">📅</text>
      <text x={C2X+C2W/2} y={CY2+13} textAnchor="middle" fontSize="8.5" fill={LOW} fontFamily="monospace">1er mardi/mois</text>

      {/* Flask */}
      <rect x={F2X} y={F2Y} width={F2W} height={F2H} rx={10} fill="var(--white)" stroke={VIB} strokeWidth="1.2"/>
      <image href={FLASK_LOGO} x={F2CX-14} y={F2Y+8} width={28} height={28}/>
      <text x={F2CX} y={F2Y+50} textAnchor="middle" fontSize="11" fontWeight="700" fill={INK} fontFamily="system-ui,sans-serif">Flask API</text>
      <text x={F2CX} y={F2Y+64} textAnchor="middle" fontSize="8.5" fill={LOW} fontFamily="monospace">REST · H/F</text>

      {/* nginx */}
      <rect x={N2X} y={N2Y} width={N2W} height={N2H} rx={9} fill="var(--white)" stroke={VIB} strokeWidth="1.2"/>
      <text x={N2CX} y={CY2-1} textAnchor="middle" fontSize="11" fontWeight="700" fill={INK} fontFamily="monospace">nginx</text>
      <text x={N2CX} y={CY2+14} textAnchor="middle" fontSize="8.5" fill={LOW} fontFamily="monospace">reverse proxy</text>

      {/* Dashboard */}
      <rect x={D2X} y={D2Y} width={D2W} height={D2H} rx={10} fill="var(--white)" stroke={VIB} strokeWidth="1.2"/>
      <text x={D2CX} y={D2Y+24} textAnchor="middle" fontSize="15">🎾</text>
      <text x={D2CX} y={D2Y+48} textAnchor="middle" fontSize="11" fontWeight="700" fill={INK} fontFamily="system-ui,sans-serif">Dashboard</text>
      <text x={D2CX} y={D2Y+63} textAnchor="middle" fontSize="8.5" fill={LOW} fontFamily="monospace">HTML/JS vanilla</text>

      {/* Docker */}
      <rect x={DK2X} y={DK2Y} width={DK2W} height={DK2H} rx={9} fill={GRL} stroke={GRB} strokeWidth="1" strokeDasharray="5 4"/>
      <image href={DOCKER_LOGO} x={DK2X+10} y={DK2Y+10} width={22} height={22}/>
      <text x={DK2X+38} y={DK2Y+26} fontSize="10" fontWeight="700" fill={GR} fontFamily="monospace">Docker</text>
      <text x={DK2X+38} y={DK2Y+40} fontSize="8.5" fill={LOW} fontFamily="monospace">nginx · Render</text>

      <text x={W-10} y={CY2+4} textAnchor="end" fontSize="9" fill={VI} fontFamily="monospace" fillOpacity="0.55">serving stack</text>
    </svg>
  )
}

function DiagramCard({ uid, onExpand }) {
  return (
    <div style={{background:'var(--white)',border:'1px solid var(--border)',borderRadius:14,padding:'14px 18px 20px',marginBottom:28}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
        <div style={{fontSize:8,letterSpacing:3,textTransform:'uppercase',color:'var(--lilas)',fontWeight:700,fontFamily:'monospace'}}>
          Architecture du systeme
        </div>
        {onExpand && (
          <button onClick={onExpand} style={{fontSize:9,color:'var(--low)',background:'var(--cream2)',border:'1px solid var(--border)',borderRadius:6,padding:'3px 9px',cursor:'pointer',fontFamily:'monospace',letterSpacing:1}}>
            agrandir
          </button>
        )}
      </div>
      <WorkflowSVG uid={uid}/>
    </div>
  )
}

export default function DiagramPadel() {
  const [expanded, setExpanded] = useState(false)
  useEffect(() => {
    if (!expanded) return
    const fn = (e) => { if (e.key === 'Escape') setExpanded(false) }
    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [expanded])

  return (
    <>
      <DiagramCard uid="padel-inline" onExpand={() => setExpanded(true)}/>
      {expanded && createPortal(
        <div onClick={() => setExpanded(false)} style={{position:'fixed',inset:0,zIndex:9999,background:'rgba(0,0,0,0.4)',display:'flex',alignItems:'center',justifyContent:'center',padding:'5vw'}}>
          <div onClick={e => e.stopPropagation()} style={{width:'100%',maxWidth:1100,background:'var(--cream)',border:'1px solid var(--border)',borderRadius:20,padding:'20px 28px 28px',boxShadow:'0 32px 80px rgba(0,0,0,0.15)'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
              <div style={{fontSize:8,letterSpacing:3,textTransform:'uppercase',color:'var(--lilas)',fontWeight:700,fontFamily:'monospace'}}>
                Architecture — Padel classements FFT
              </div>
              <button onClick={() => setExpanded(false)} style={{width:30,height:30,borderRadius:'50%',border:'1px solid var(--border)',background:'var(--white)',cursor:'pointer',fontSize:14,color:'var(--mid)',display:'flex',alignItems:'center',justifyContent:'center'}}>✕</button>
            </div>
            <WorkflowSVG uid="padel-modal"/>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
