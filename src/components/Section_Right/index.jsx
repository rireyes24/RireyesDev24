import './style.css';

function SectionRight({nameSection, sectionSide}){
    return(
        <>
            <div className={`section-container section-container-${sectionSide}`}>
                <h2 className={`h2 h2-${sectionSide}`}>{nameSection}</h2>                         
                <span className={`design design-${sectionSide}`}></span>
            </div>
        </>
    );
}

export { SectionRight }