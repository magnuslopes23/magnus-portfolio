type ProjectVisualProps = {
  id: string;
  index: number;
  title: string;
};

export function ProjectVisual({ id, index, title }: ProjectVisualProps) {
  return (
    <div className={`project-visual project-visual-${id}`} aria-label={`${title} visual overview`}>
      <div className="project-index">0{index + 1}</div>

      {id === "invoice-automation" && (
        <div className="system-frame invoice-system" aria-hidden="true">
          <div className="system-toolbar">
            <span>Invoice workflow</span>
            <i className="system-live">Active</i>
          </div>
          <div className="invoice-route">
            <div className="route-node">
              <i className="node-dot" />
              <div><small>01 · Intake</small><strong>Supplier invoice</strong></div>
              <span className="node-state">PDF</span>
            </div>
            <div className="route-line" />
            <div className="route-node">
              <i className="node-dot" />
              <div><small>02 · Control</small><strong>Approval routing</strong></div>
              <span className="node-state state-blue">Review</span>
            </div>
            <div className="route-line" />
            <div className="route-node">
              <i className="node-dot" />
              <div><small>03 · Process</small><strong>Extract & validate</strong></div>
              <span className="node-state state-violet">Python</span>
            </div>
            <div className="route-line" />
            <div className="route-node route-node-final">
              <i className="node-dot" />
              <div><small>04 · Output</small><strong>Accounting import</strong></div>
              <span className="node-state state-success">Ready</span>
            </div>
          </div>
        </div>
      )}

      {id === "profit-reporting" && (
        <div className="system-frame reporting-system" aria-hidden="true">
          <div className="system-toolbar">
            <span>Reporting pipeline</span>
            <i>Monthly view</i>
          </div>
          <div className="report-kpis">
            <div><small>Source</small><strong>Operational data</strong></div>
            <div><small>Model</small><strong>Validated</strong></div>
            <div><small>Output</small><strong>Profitability</strong></div>
          </div>
          <div className="report-chart">
            <div className="chart-grid-lines" />
            <div className="bar bar-1" />
            <div className="bar bar-2" />
            <div className="bar bar-3" />
            <div className="bar bar-4" />
            <div className="bar bar-5" />
            <div className="bar bar-6" />
            <svg className="trend-line" viewBox="0 0 300 110" preserveAspectRatio="none">
              <path d="M8 84 C45 72, 58 78, 92 57 S142 48, 167 55 S218 30, 292 22" />
            </svg>
          </div>
          <div className="report-footer">
            <span><i className="legend-dot" /> Transformation</span>
            <span><i className="legend-dot legend-line" /> Trend</span>
          </div>
        </div>
      )}

      {id === "registration-monitoring" && (
        <div className="system-frame monitor-system" aria-hidden="true">
          <div className="system-toolbar">
            <span>Registration monitor</span>
            <i>Scheduled check</i>
          </div>
          <div className="compare-grid">
            <div className="compare-source">
              <small>Source A</small>
              <strong>Stock records</strong>
              <div className="source-lines"><i /><i /><i /></div>
            </div>
            <div className="compare-link"><span>↔</span></div>
            <div className="compare-source">
              <small>Source B</small>
              <strong>Registration data</strong>
              <div className="source-lines"><i /><i /><i /></div>
            </div>
          </div>
          <div className="monitor-result">
            <div><i className="result-icon">!</i><span><small>Exception path</small><strong>Mismatch detected for review</strong></span></div>
            <span className="node-state state-blue">Actionable</span>
          </div>
        </div>
      )}
    </div>
  );
}
