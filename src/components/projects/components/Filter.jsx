import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Filter({setActiveTechnology, activeTechnology, setFiltered, projects}) {
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        if(activeTechnology == '') {
            setFiltered(projects);
            return;
        }
        const filtered = projects.filter((project) => project.tags.includes(activeTechnology));
        setFiltered(filtered);
    }, [activeTechnology]);
    
    return (
        <div className="filter-container">
            <button className={activeTechnology === '' ? "active" : ""} onClick={() => setActiveTechnology('')}>{t("projects.all")}</button>
            <button className={activeTechnology === 'symfony' ? "active" : ""} onClick={() => setActiveTechnology('symfony')}>Symfony</button>
            <button className={activeTechnology === 'laravel' ? "active" : ""} onClick={() => setActiveTechnology('laravel')}>Laravel</button>
            <button className={activeTechnology === 'php' ? "active" : ""} onClick={() => setActiveTechnology('php')}>PHP</button>
            <button className={activeTechnology === 'react' ? "active" : ""} onClick={() => setActiveTechnology('react')}>React</button>
            <button className={activeTechnology === 'javascript' ? "active" : ""} onClick={() => setActiveTechnology('javascript')}>JavaScript</button>
            <button className={activeTechnology === 'api' ? "active" : ""} onClick={() => setActiveTechnology('api')}>API</button>
        </div>
    )
}

export default Filter;