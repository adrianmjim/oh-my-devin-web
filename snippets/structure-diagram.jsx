export const StructureDiagram = () => (
  <svg
    className="omd-diagram-svg"
    viewBox="0 0 1008 300"
    role="img"
    aria-label="A team run of three isolated sessions with a human gate after every stage, and a council of independent seats around its decision record"
  >
    <text className="omd-dg-kicker" x="0" y="14">TEAM RUN</text>
    <text className="omd-dg-caption" x="0" y="40">Three isolated sessions, a human gate after every stage.</text>
    <rect className="omd-dg-frame" x="0" y="64" width="200" height="112" rx="10" />
    <text className="omd-dg-tag" x="14" y="86">SESSION</text>
    <rect className="omd-dg-card" x="14" y="98" width="172" height="64" rx="8" />
    <text className="omd-dg-role" x="28" y="124">architect</text>
    <text className="omd-dg-artifact" x="28" y="146">architecture.json</text>
    <line className="omd-dg-link" x1="200" y1="120" x2="232" y2="120" />
    <rect className="omd-dg-gate" x="210" y="114" width="12" height="12" transform="rotate(45 216 120)" />
    <rect className="omd-dg-frame" x="232" y="64" width="200" height="112" rx="10" />
    <text className="omd-dg-tag" x="246" y="86">SESSION</text>
    <rect className="omd-dg-card" x="246" y="98" width="172" height="64" rx="8" />
    <text className="omd-dg-role" x="260" y="124">executor</text>
    <text className="omd-dg-artifact" x="260" y="146">diff + evidence.json</text>
    <line className="omd-dg-link" x1="432" y1="120" x2="464" y2="120" />
    <rect className="omd-dg-gate" x="442" y="114" width="12" height="12" transform="rotate(45 448 120)" />
    <rect className="omd-dg-frame" x="464" y="64" width="200" height="112" rx="10" />
    <text className="omd-dg-tag" x="478" y="86">SESSION</text>
    <rect className="omd-dg-card" x="478" y="98" width="172" height="64" rx="8" />
    <text className="omd-dg-role" x="492" y="124">reviewer</text>
    <text className="omd-dg-artifact" x="492" y="146">review.json</text>
    <line className="omd-dg-link" x1="664" y1="120" x2="696" y2="120" />
    <rect className="omd-dg-gate" x="674" y="114" width="12" height="12" transform="rotate(45 680 120)" />
    <text className="omd-dg-gate-label" x="710" y="125">approve / reject</text>
    <line className="omd-dg-divider" x1="808" y1="0" x2="808" y2="300" />
    <text className="omd-dg-kicker" x="832" y="14">COUNCIL</text>
    <text className="omd-dg-caption" x="832" y="40">Independent seats,</text>
    <text className="omd-dg-caption" x="832" y="60">closes by consent.</text>
    <circle className="omd-dg-ring" cx="920" cy="168" r="62" />
    <circle className="omd-dg-seat omd-dg-seat-proposer" cx="920" cy="106" r="5.5" />
    <circle className="omd-dg-seat" cx="973.7" cy="137" r="5.5" />
    <circle className="omd-dg-seat" cx="973.7" cy="199" r="5.5" />
    <circle className="omd-dg-seat" cx="920" cy="230" r="5.5" />
    <circle className="omd-dg-seat" cx="866.3" cy="199" r="5.5" />
    <circle className="omd-dg-seat" cx="866.3" cy="137" r="5.5" />
    <text className="omd-dg-record" x="920" y="165" textAnchor="middle">decision</text>
    <text className="omd-dg-record" x="920" y="181" textAnchor="middle">record</text>
    <text className="omd-dg-note" x="920" y="264" textAnchor="middle">the record carries dissent</text>
  </svg>
);
