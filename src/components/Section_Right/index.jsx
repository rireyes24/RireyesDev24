import './style.css';

function SectionRight({nameSection, sectionSide}){
    return(
        <>
            <div className={`section-container section-container-${sectionSide}`}>
                <span className={`design design-${'left'}`}></span>
                <h2 className={`h2 h2-${sectionSide}`}>{nameSection}</h2>                         
                <span className={`design design-${'right'}`}></span>
            </div>
        </>
    );
}

export { SectionRight }