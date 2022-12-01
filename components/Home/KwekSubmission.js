import * as Yup from 'yup'
import TextareaAutosize from 'react-textarea-autosize'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'

export default function KwekSubmission ({ postKwek, initialValue }) {
    const maxKwekSize = 256

    const form = useFormik({
        initialValues: {
            text: initialValue ?? ''
        },
        validationSchema: Yup.object({
            text: Yup.string()
                .max(maxKwekSize, 'Must be 256 characters or less')
                .required('Required')
        }),
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            postKwek({
                'text': values.text,
            }).then(() => {
                form.resetForm()
            })
        },
    })

    function handleKeyDown (e) {
        if (e.key === 'Enter' && e.ctrlKey) {
            e.preventDefault()
            form.handleSubmit()
        }
    }

    return (
        <section className="flex items-center p-4">
            <div
                className={ `relative flex-1 w-full bg-kwekker-purple-medium border border-kwekker-purple-light
                rounded
                ${ form.touched.text && form.errors.text ? 'ring-2 ring-red-500' : '' }` }
            >
                <form onSubmit={ form.handleSubmit }>
                    <TextareaAutosize
                        id="text"
                        aria-label="Kwek input"
                        className={ `w-full p-2 text-lg bg-kwekker-purple-medium outline-none resize-none overflow-hidden
                        placeholder-kwekker-purple-light placeholder-opacity-50 focus:ring-0 active:ring-0` }
                        placeholder="Kwek kwek..."
                        onKeyDown={handleKeyDown}
                        { ...form.getFieldProps('text') }
                    />

                    <div
                        className="float-right mr-3 mb-2"
                    >
                        <span
                            className="mr-4 font-semibold text-lg select-none"
                        >
                            { maxKwekSize - form.values.text.length }
                        </span>
                        <button
                            type="submit"
                        >
                            <FontAwesomeIcon
                                icon={ faPaperPlane }
                                size="xl"
                            />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
