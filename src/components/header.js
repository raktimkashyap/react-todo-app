import React from 'react'

function Header() {

    // ON FORM SUBMIT===========================

    const handleInput = (e) => {
        e.preventDefault()
        console.log('pressed')
    }


    // ON INPUT CHANGE==========================

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    //------------------------------------------

    return (
        <div style={styles.headerWrapper}>
            <form onSubmit={handleInput}>
                <input
                    style={{
                        height: 24,
                        padding: '2px 6px',
                        border: 'none',
                        borderRadius: 3,
                        width: 250
                    }}
                    type='text'
                    onChange={handleChange}
                    name='task'
                // value={''}
                />
                <button
                    style={{
                        padding: '2px 15px',
                        borderRadius: 3,
                        border: 'none',
                        height: 26,
                        backgroundColor: 'white',
                        marginLeft: 5
                    }}
                    type='submit'>Add</button>
            </form>
        </div>
    )
}

const styles = {
    headerWrapper: {
        width: '100%',
        height: '120px',
        backgroundColor: '#639fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default Header
