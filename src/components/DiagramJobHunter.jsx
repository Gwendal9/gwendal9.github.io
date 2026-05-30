import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const N8N_LOGO    = 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4'
const OPENAI_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
const SHEETS_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg'
const REACT_LOGO  = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'

const STEPS = [
  { color: '#3b82f6', label: 'APEC API',    detail: '~1 250 offres / execution', logo: null, emoji: null },
  { color: '#f59e0b', label: 'Filtre',       detail: 'exclusions + dedup',        logo: null, emoji: '⚡' },
  { color: '#10b981', label: 'GPT-4o-mini',  detail: 'score 0-10 + resume',       logo: OPENAI_LOGO, emoji: null },
  { color: '#10b981', label: 'Sheets write', detail: 'upsert par URL',            logo: SHEETS_LOGO, emoji: null },
]

const W=860, H=210, CY=H/2
const SX=8,  SY=CY-24, SW=108, SH=48
const PX=164, PY=8, PW=318, PH=H-16, PR=PX+PW, PHDR=36
const stepH = (PH-PHDR)/STEPS.length
const stepCY = i => PY+PHDR+i*stepH+stepH/2
const SHX=538, SHY=CY-36, SHW=132, SHH=72, SHCX=SHX+SHW/2
const DX=722,  DY=CY-36,  DW=130,  DH=72,  DCX=DX+DW/2

const pSched    = `M ${SX+SW},${CY} L ${PX},${CY}`
const pToSheets = `M ${PR},${CY} L ${SHX},${CY}`
const pToDash   = `M ${SHX+SHW},${CY} L ${DX},${CY}`
const pWebhook  = `M ${DCX},${DY+DH} C ${DCX},${H+32} ${PX+PW/2},${H+32} ${PX+20},${PY+PH-8}`

const ROSE='#e11d48', GR='#059669', VI='#7c3aed'

function WorkflowSVG({ uid='a' }) {
  const a = `jh${uid}`
  return (
    <svg viewBox={`0 0 ${W} ${H+44}`} width="100%" style={{display:'block',overflow:'visible'}}>
      <defs>
        <style>{`@keyframes ${a}{to{stroke-dashoffset:-20}}`}</style>
        <filter id={`${uid}-gr`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id={`${uid}-gg`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id={`${uid}-gv`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <path id={`${uid}-ps`}  d={pSched}/>
        <path id={`${uid}-psh`} d={pToSheets}/>
        <path id={`${uid}-pd`}  d={pToDash}/>
        <path id={`${uid}-pw`}  d={pWebhook}/>
      </defs>

      {/* Connection lines */}
      {[
        [`${uid}-ps`,  ROSE, '0s'],
        [`${uid}-psh`, GR,   '0.3s'],
        [`${uid}-pd`,  VI,   '0.6s'],
      ].map(([ref, clr, delay]) => (
        <g key={ref}>
          <use href={`#${ref}`} fill="none" stroke="var(--border)" strokeWidth="1.5"/>
          <use href={`#${ref}`} fill="none" stroke={clr} strokeWidth="1.5" strokeOpacity="0.6"
            strokeDasharray="5 5" style={{animation:`${a} 0.9s linear infinite`, animationDelay:delay}}/>
        </g>
      ))}
      <use href={`#${uid}-pw`} fill="none" stroke={VI} strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 7"/>

      {/* Glowing dots */}
      {[
        [`${uid}-ps`,  ROSE, `${uid}-gr`, '1.1s', '0s'],
        [`${uid}-psh`, GR,   `${uid}-gg`, '1.3s', '0.35s'],
        [`${uid}-pd`,  VI,   `${uid}-gv`, '1.0s', '0.7s'],
      ].map(([href, clr, filt, dur, begin]) => (
        <circle key={href} r="2.5" fill={clr} filter={`url(#${filt})`}>
          <animateMotion dur={dur} repeatCount="indefinite" begin={begin}>
            <mpath href={`#${href}`}/>
          </animateMotion>
        </circle>
      ))}

      {/* Junction dots */}
      {[[PX,CY,ROSE],[PR,CY,GR],[SHX,CY,GR],[SHX+SHW,CY,VI],[DX,CY,VI]].map(([cx,cy,clr],i)=>(
        <circle key={i} cx={cx} cy={cy} r="2.5" fill={clr} opacity="0.8"/>
      ))}

      {/* Schedule */}
      <rect x={SX} y={SY} width={SW} height={SH} rx={10}
        fill="rgba(225,29,72,0.06)" stroke="rgba(225,29,72,0.2)" strokeWidth="1"/>
      <text x={SX+SW/2} y={CY-7} textAnchor="middle" fontSize="15">&#x23F0;</text>
      <text x={SX+SW/2} y={CY+8} textAnchor="middle" fontSize="10" fontWeight="600"
        fill={ROSE} fontFamily="system-ui,sans-serif">Schedule</text>
      <text x={SX+SW/2} y={CY+20} textAnchor="middle" fontSize="7.5"
        fill="var(--low)" fontFamily="monospace">8h · lun-ven</text>

      {/* n8n panel — clean card */}
      <rect x={PX} y={PY} width={PW} height={PH} rx={12}
        fill="var(--white)" stroke="var(--border)" strokeWidth="1"/>
      {/* Header strip */}
      <rect x={PX} y={PY} width={PW} height={PHDR} rx={12} fill="rgba(225,29,72,0.04)"/>
      <rect x={PX} y={PY+PHDR-1} width={PW} height={1} fill="var(--border)"/>
      <image href={N8N_LOGO} x={PX+14} y={PY+8} width={20} height={20}/>
      <text x={PX+40} y={PY+22} fontSize="10" fontWeight="700" letterSpacing="1.5"
        fill={ROSE} fontFamily="monospace">WORKFLOW N8N</text>
      <text x={PR-14} y={PY+22} fontSize="7.5" fill="var(--low)" fontFamily="monospace" textAnchor="end">
        VPS · cron
      </text>

      {STEPS.map((s,i)=>{
        const cy=stepCY(i), rowY=PY+PHDR+i*stepH
        return (
          <g key={i}>
            {i>0 && <line x1={PX+1} y1={rowY} x2={PR-1} y2={rowY} stroke="var(--border)" strokeWidth="0.8"/>}
            <circle cx={PX+18} cy={cy} r="4.5" fill={s.color} opacity="0.9"/>
            {s.logo
              ? <image href={s.logo} x={PX+30} y={cy-10} width={20} height={20}/>
              : s.emoji && <text x={PX+30} y={cy+6} fontSize="13">{s.emoji}</text>
            }
            <text x={PX+56} y={cy-4} fontSize="11" fontWeight="600" fill="var(--ink)" fontFamily="system-ui,sans-serif">{s.label}</text>
            <text x={PX+56} y={cy+10} fontSize="8.5" fill="var(--low)" fontFamily="monospace">{s.detail}</text>
          </g>
        )
      })}

      {/* Sheets */}
      <rect x={SHX} y={SHY} width={SHW} height={SHH} rx={10}
        fill="rgba(5,150,105,0.06)" stroke="rgba(5,150,105,0.2)" strokeWidth="1"/>
      <image href={SHEETS_LOGO} x={SHCX-13} y={CY-26} width={26} height={26}/>
      <text x={SHCX} y={CY+14} textAnchor="middle" fontSize="10" fontWeight="600"
        fill="var(--ink)" fontFamily="system-ui,sans-serif">Google Sheets</text>
      <text x={SHCX} y={CY+26} textAnchor="middle" fontSize="7.5"
        fill="var(--low)" fontFamily="monospace">source of truth</text>

      {/* Dashboard */}
      <rect x={DX} y={DY} width={DW} height={DH} rx={10}
        fill="rgba(124,58,237,0.06)" stroke="rgba(124,58,237,0.2)" strokeWidth="1"/>
      <image href={REACT_LOGO} x={DCX-13} y={CY-26} width={26} height={26}/>
      <text x={DCX} y={CY+14} textAnchor="middle" fontSize="10" fontWeight="600"
        fill="var(--ink)" fontFamily="system-ui,sans-serif">Dashboard</text>
      <text x={DCX} y={CY+26} textAnchor="middle" fontSize="7.5"
        fill="var(--low)" fontFamily="monospace">GitHub Pages</text>

      <text x={(DCX+PX+PW/2)/2} y={H+42} textAnchor="middle"
        fontSize="7.5" fill="var(--low)" fontFamily="monospace" fillOpacity="0.5">
        webhook · kanban
      </text>
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

export default function DiagramJobHunter() {
  const [expanded, setExpanded] = useState(false)
  useEffect(() => {
    if (!expanded) return
    const fn = e => { if (e.key==='Escape') setExpanded(false) }
    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [expanded])
  return (
    <>
      <DiagramCard uid="jh-i" onExpand={() => setExpanded(true)}/>
      {expanded && createPortal(
        <div onClick={() => setExpanded(false)} style={{position:'fixed',inset:0,zIndex:9999,background:'rgba(0,0,0,0.4)',display:'flex',alignItems:'center',justifyContent:'center',padding:'4vw'}}>
          <div onClick={e => e.stopPropagation()} style={{width:'100%',maxWidth:1320,background:'var(--cream)',border:'1px solid var(--border)',borderRadius:16,padding:'24px 40px 36px',boxShadow:'0 32px 80px rgba(0,0,0,0.1)'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:28}}>
              <span style={{fontSize:9,letterSpacing:3,textTransform:'uppercase',color:'var(--lilas)',fontWeight:700,fontFamily:'monospace'}}>Architecture — Job Hunter</span>
              <button onClick={() => setExpanded(false)} style={{all:'unset',width:28,height:28,borderRadius:'50%',border:'1px solid var(--border)',background:'var(--white)',cursor:'pointer',fontSize:16,color:'var(--mid)',display:'flex',alignItems:'center',justifyContent:'center',lineHeight:1}}>
                {'×'}
              </button>
            </div>
            <WorkflowSVG uid="jh-m"/>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
