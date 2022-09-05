import React from "react";

import './styles.css';

import Close from '../../assets/images/Clear.png';

export default function Modal({setShowModal,  remove, menssage}) {
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h1>Remover {menssage}?</h1>
                    <img src={Close} width="16" height="16" onClick={() => setShowModal(false)}/>
                </div>
                <div className="modal-body">
                    <p>Tem certeza? Essa ação não poderar ser desfeita!</p>
                </div>
                <div className="modal-footer">
                    <button onClick={() => setShowModal(false)} id="btn-cancel">Cancelar</button>
                    <button onClick={remove}>Confirma</button>
                </div>
            </div>
        </div>
    );
}