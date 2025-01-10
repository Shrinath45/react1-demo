

export function Navbar(props){
    return(
        <nav className={`d-flex justify-content-between p-3 border border-1 ${props.theme}`}>
            <div className="fs-5 fw-bold">{props.title}</div>
            <div>
                {
                    props.menuItems.map(item=><span className="mx-3" key={item}>{item}</span>) 
                }
            </div>
            <div>
                {
                    props.shortcut.map(shortcut=><button className={`${shortcut} btn`} key={shortcut}></button>)
                }
            </div>
        </nav>
    )
}