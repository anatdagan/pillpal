import "../ui/ui.css"

export function Card({isClosable, onClose, children}: {isClosable?: boolean, onClose?: () => void, children: React.ReactNode}) {
    return (
        <div className="card">
            {children}
            {isClosable && <button type="button" className="close-button" onClick={onClose}>X</button>}
        </div>
    );
}