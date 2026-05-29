import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const N8N_LOGO    = 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4'
const OPENAI_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
const SHEETS_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg'
const REACT_LOGO  = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'

const STEPS = [
  { color: '#2563eb', label: 'APEC API',    detail: '5 mots-cles x 5p x 50 -> ~1 250 offres/jour', emoji: null, logo: null },
  { color: '#d97706', label: 'Filtre',       detail: 'exclusions · dedup titre / entreprise',        emoji: '⚡', logo: null },
  { color: '#059669', label: 'GPT-4o-mini',  detail: 'score 0-10 · resume · si non score',           emoji: null, logo: OPENAI_LOGO },
  { color: '#059669', label: 'Sheets write', detail: 'upsert par URL · Service Account',             emoji: null, logo: SHEETS_LOGO },
]

const RI = 'rgba(234,75,113,0.22)', GR = '#059669', GRB = 'rgba(5,150,105,0.22)'
const VI = '#7c3aed', VIB = 'rgba(124,58,237,0.22)'
const INK = '#1a1a1a', LOW = '#7a7068', BRD = '#d8cfc2'
const ROSE = '#ea4b71', ROSEB = 'rgba(234,75,113,0.22)'

const W=780, H=210, CY=H/2
const SX=8,SY=CY-22,SW=110,SH=44
const PX=136,PY=8,PW=328,PH=H-16,PR=PX+PW,PHDR=40
const stepH=(PH-PHDR)/STEPS.length
const stepCY=(i)=>PY+PHDR+i*stepH+stepH/2
const SHX=484,SHY=CY-37,SHW=130,SHH=74,SHCX=SHX+SHW/2
const DX=634,DY=CY-37,DW=138,DH=74,DCX=DX+DW/2

const pSched    = `M ${SX+SW},${CY} L ${PX},${CY}`
const pToSheets = `M ${PR},${CY} L ${SHX},${CY}`
const pToDash   = `M ${SHX+SHW},${CY} L ${DX},${CY}`
const pWebhook  = `M ${DCX},${DY+DH} C ${DCX},${H+28} ${PX+PW/2},${H+28} ${PX+20},${PY+PH-8}`

function WorkflowSVG({ uid='a' }) {
  const anim = `jh${uid}`
  return (
    <svg viewBox={`0 0 ${W} ${H+44}`} width="100%" style={{display:'block',overflow:'visible'}}>
      <defs>
        <style>{`@keyframes ${anim}{to{stroke-dashoffset:-20}}`}</style>
        <path id={`${uid}-ps`}  d={pSched}/>
        <path id={`${uid}-psh`} d={pToSheets}/>
        <path id={`${uid}-pd`}  d={pToDash}/>
        <path id={`${uid}-pw`}  d={pWebhook}/>
      </defs>

      {[[`${uid}-ps`,ROSE,'0s'],[`${uid}-psh`,GR,'0.35s'],[`${uid}-pd`,VI,'0.65s']].map(([ref,stroke,delay])=>(
        <g key={ref}>
          <use href={`#${ref}`} fill="none" stroke={BRD} strokeWidth="1.5"/>
          <use href={`#${ref}`} fill="none" stroke={stroke} strokeWidth="1.5" strokeOpacity="0.5"
            strokeDasharray="5 5" style={{animation:`${anim} 0.85s linear infinite`,animationDelay:delay}}/>
        </g>
      ))}
      <use href={`#${uid}-pw`} fill="none" stroke={VI} strokeWidth="1.1" strokeOpacity="0.2" strokeDasharray="4 7"/>

      {[[`${uid}-ps`,ROSE,'1.1s','0s'],[`${uid}-psh`,GR,'1.3s','0.4s'],[`${uid}-pd`,VI,'1.0s','0.75s']].map(([href,fill,dur,begin])=>(
        <circle key={href} r="3.5" fill={fill} opacity="0.8">
          <animateMotion dur={dur} repeatCount="indefinite" begin={begin}><mpath href={`#${href}`}/></animateMotion>
        </circle>
      ))}

      <circle cx={PX}      cy={CY} r="4" fill={ROSE} opacity="0.7"/>
      <circle cx={PR}      cy={CY} r="4" fill={GR}   opacity="0.7"/>
      <circle cx={SHX}     cy={CY} r="4" fill={GR}   opacity="0.7"/>
      <circle cx={SHX+SHW} cy={CY} r="4" fill={VI}   opacity="0.7"/>
      <circle cx={DX}      cy={CY} r="4" fill={VI}   opacity="0.7"/>

      {/* n8n Panel */}
      <rect x={PX} y={PY} width={PW} height={PH} rx={11}
        fill="var(--cream2)" stroke={ROSEB} strokeWidth="1.2" strokeDasharray="8 4"/>
      <image href={N8N_LOGO} x={PX+12} y={PY+9} width={22} height={22}/>
      <text x={PX+38} y={PY+24} fontSize="10" fontWeight="700" letterSpacing="2"
        fill={ROSE} fontFamily="monospace">WORKFLOW N8N</text>
      <text x={PR-10} y={PY+24} fontSize="7.5" fill={LOW} fontFamily="monospace" textAnchor="end">VPS · cron 8h lun-ven</text>
      <line x1={PX+1} y1={PY+PHDR} x2={PR-1} y2={PY+PHDR} stroke={BRD} strokeWidth="1"/>

      {STEPS.map((s,i)=>{
        const cy=stepCY(i), rowY=PY+PHDR+i*stepH
        return (
          <g key={i}>
            {i>0 && <line x1={PX+8} y1={rowY} x2={PR-8} y2={rowY} stroke={BRD} strokeWidth="1"/>}
            <circle cx={PX+16} cy={cy} r="4" fill={s.color} opacity="0.9"/>
            {s.logo
              ? <image href={s.logo} x={PX+27} y={cy-10} width={20} height={20}/>
              : <text x={PX+27} y={cy+6} fontSize="13">{s.emoji}</text>
            }
            <text x={PX+52} y={cy-5} fontSize="10.5" fontWeight="700" fill={INK} fontFamily="system-ui,sans-serif">{s.label}</text>
            <text x={PX+52} y={cy+10} fontSize="8" fill={LOW} fontFamily="monospace">{s.detail}</text>
          </g>
        )
      })}

      {/* Schedule pill */}
      <rect x={SX} y={SY} width={SW} height={SH} rx={10} fill="var(--white)" stroke={ROSEB} strokeWidth="1.2"/>
      <text x={SX+SW/2} y={CY-5} textAnchor="middle" fontSize="14">⏰</text>
      <text x={SX+SW/2} y={CY+9} textAnchor="middle" fontSize="9.5" fontWeight="700" fill={INK} fontFamily="system-ui,sans-serif">Schedule</text>
      <text x={SX+SW/2} y={CY+21} textAnchor="middle" fontSize="7.5" fill={LOW} fontFamily="monospace">8h · lun-ven</text>

      {/* Sheets */}
      <rect x={SHX} y={SHY} width={SHW} height={SHH} rx={10} fill="var(--white)" stroke={GRB} strokeWidth="1.2"/>
      <image href={SHEETS_LOGO} x={SHCX-13} y={CY-28} width={26} height={26}/>
      <text x={SHCX} y={CY+10} textAnchor="middle" fontSize="10" fontWeight="700" fill={INK} fontFamily="system-ui,sans-serif">Google Sheets</text>
      <text x={SHCX} y={CY+24} textAnchor="middle" fontSize="7.5" fill={LOW} fontFamily="monospace">source of truth</text>

      {/* Dashboard */}
      <rect x={DX} y={DY} width={DW} height={DH} rx={10} fill="var(--white)" stroke={VIB} strokeWidth="1.2"/>
      <image href={REACT_LOGO} x={DCX-13} y={CY-28} width={26} height={26}/>
      <text x={DCX} y={CY+10} textAnchor="middle" fontSize="10" fontWeight="700" fill={INK} fontFamily="system-ui,sans-serif">Dashboard</text>
      <text x={DCX} y={CY+24} textAnchor="middle" fontSize="7.5" fill={LOW} fontFamily="monospace">GitHub Pages</text>

      <text x={(DCX+PX+PW/2)/2} y={H+40} textAnchor="middle" fontSize="7.5" fill={LOW} fontFamily="monospace" fillOpacity="0.6">
        webhook · update statut kanban
      </text>
    </svg>
  )
}

function DiagramCard({ uid, onExpand }) {
  return (
    <div style={{background:'var(--white)',border:'1px solid var(--border)',borderRadius:14,padding:'14px 18px 20px',marginBottom:28}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
        <div style={{fontSize:8,letterSpacing:3,textTransform:'uppercase',color:'var(--lilas)',fontWeight:700,fontFamily:'monospace'}}>
          Architecture du workflow
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

export default function DiagramJobHunter() {
  const [expanded, setExpanded] = useState(false)
  useEffect(() => {
    if (!expanded) return
    const fn = (e) => { if (e.key === 'Escape') setExpanded(false) }
    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [expanded])

  return (
    <>
      <DiagramCard uid="inline" onExpand={() => setExpanded(true)}/>
      {expanded && createPortal(
        <div onClick={() => setExpanded(false)} style={{position:'fixed',inset:0,zIndex:9999,background:'rgba(0,0,0,0.4)',display:'flex',alignItems:'center',justifyContent:'center',padding:'5vw'}}>
          <div onClick={e => e.stopPropagation()} style={{width:'100%',maxWidth:1100,background:'var(--cream)',border:'1px solid var(--border)',borderRadius:20,padding:'20px 28px 28px',boxShadow:'0 32px 80px rgba(0,0,0,0.15)'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
              <div style={{fontSize:8,letterSpacing:3,textTransform:'uppercase',color:'var(--lilas)',fontWeight:700,fontFamily:'monospace'}}>
                Architecture du workflow — Job Hunter
              </div>
              <button onClick={() => setExpanded(false)} style={{width:30,height:30,borderRadius:'50%',border:'1px solid var(--border)',background:'var(--white)',cursor:'pointer',fontSize:14,color:'var(--mid)',display:'flex',alignItems:'center',justifyContent:'center'}}>✕</button>
            </div>
            <WorkflowSVG uid="modal"/>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
