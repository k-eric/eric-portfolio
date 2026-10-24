import type { ProjectPreviewVariant } from "@/lib/projects";

type ProjectPreviewProps = {
  variant: ProjectPreviewVariant;
  title: string;
  label: string;
  className?: string;
};

export function ProjectPreview({
  variant,
  title,
  label,
  className = "",
}: ProjectPreviewProps) {
  const visual = variant === "in-for-christ" ? "lab" : variant;

  return (
    <div
      className={`project-art project-art--${visual} ${className}`}
      role="img"
      aria-label={label}
    >
      {visual === "watch" && (
        <div className="watch-study" aria-hidden="true">
          <div className="watch-copy">
            <span>OBJECTS / 001</span>
            <strong>Time,<br />considered.</strong>
            <span>FORM / MATERIAL / OBJECT 01</span>
          </div>
          <div className="watch-face"><span /></div>
          <div className="watch-index">FORM STUDY / 01</div>
        </div>
      )}
      {visual === "creative" && (
        <div className="creative-study" aria-hidden="true">
          <span className="creative-mark">K—C</span>
          <div className="creative-block creative-block--one">FORM<br />FOLLOWS<br />FEELING</div>
          <div className="creative-block creative-block--two">A study in<br />colour &amp; type</div>
          <span className="creative-caption">SELECTED WORK / VISUAL STUDY</span>
        </div>
      )}
      {visual === "lab" && (
        <div className="lab-study" aria-hidden="true">
          <div className="lab-topline"><span>FIELD NOTES / VISUAL STUDY</span><span>01—03</span></div>
          <div className="lab-orbit"><i /><i /><i /></div>
          <div className="lab-bottomline"><strong>{title}</strong><span>ABSTRACT STUDY</span></div>
        </div>
      )}
      <span className="art-caption">ILLUSTRATION / NOT A PRODUCT SCREENSHOT</span>
    </div>
  );
}
