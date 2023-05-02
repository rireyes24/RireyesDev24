import './style.css';

function SectionRight({nameSection, sectionSide}){
 
    var expresionRegular = /\s+/g;
    var listaNombres = nameSection.replace(expresionRegular, "-").toLowerCase();   

    return(
        <>
            <div id={listaNombres} className={`section-container section-container-${sectionSide}`}>
                <span className={`design design-${'left'}`}></span>
                <h2 className={`h2 h2-${sectionSide}`}>{nameSection}</h2>                         
                <span className={`design design-${'right'}`}></span>
            </div>
        </>
    );
}

export { SectionRight }