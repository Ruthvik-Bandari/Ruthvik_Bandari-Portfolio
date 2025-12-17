import './RobotCharacter.css'

export default function RobotCharacter() {
  return (
    <div className="hero-character">
      <div className="character-wrapper">
        <div className="character-body">
          {/* Head */}
          <div className="character-head">
            <div className="character-visor">
              <div className="character-visor-reflection" />
            </div>
            <div className="character-mouth" />
          </div>

          {/* Torso */}
          <div className="character-torso">
            <div className="character-chest-core" />
            <div className="character-chest-ring" />
            
            {/* Left Arm */}
            <div className="character-arm left">
              <div className="character-hand" />
            </div>
            
            {/* Right Arm */}
            <div className="character-arm right">
              <div className="character-hand" />
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-element" style={{ top: '10%', left: '-10%' }}>🧠</div>
          <div className="floating-element" style={{ top: '30%', right: '-15%' }}>💻</div>
          <div className="floating-element" style={{ bottom: '30%', right: '-10%' }}>📊</div>
          <div className="floating-element" style={{ bottom: '10%', left: '-15%' }}>📸</div>
        </div>
      </div>
    </div>
  )
}
