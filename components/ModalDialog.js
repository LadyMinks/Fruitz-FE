import {useState} from "react";

export default function ModalDialog(props) {

    return (
        <>
            <div
                className="justify-center items-center flex fixed inset-0 z-50"
            >
                <div className="my-6 mx-auto relative w-auto max-w-3xl">
                    <div className="border-0 rounded-lg relative flex flex-col w-full bg-white">
                        <div
                            className="p-5 flex items-start justify-between border-b border-solid border-kwekker-purple-mediumlight"
                        >
                            <h3 className="text-3xl text-kwekker-purple-light font-semibold">
                                {props.header}
                            </h3>
                        </div>
                        <div className="p-6 relative flex-auto">
                            <p className="my-4 text-kwekker-purple-mediumdark text-lg">
                                {props.body}
                            </p>
                        </div>

                        <div
                            className="p-6 flex items-center justify-end border-t border-solid border-kwekker-purple-mediumlight">
                            <button
                                className="mr-2 px-6 py-2 text-kwekker-purple-dark background-transparent font-bold uppercase hover:bg-gray-100 transition"
                                onClick={props.handleFirstButton}
                            >
                                {props.firstButton}
                            </button>
                            <button
                                className="px-6 py-3 bg-kwekker-purple-light text-white font-bold uppercase rounded hover:bg-kwekker-purple-mediumlight transition"
                                onClick={props.handleSecondButton}
                            >
                                {props.secondButton}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"/>
        </>
    )
}

