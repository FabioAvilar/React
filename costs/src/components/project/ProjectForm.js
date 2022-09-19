import {useEffect, useState} from 'react'

import Select from '../form/Select'
import Input from '../form/Input';

import styles from './ProjectForm.module.css';
import SubmitBotton from '../form/SubmitButton';

function ProjectForm({handleSubmit, btnText, projectData}) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch(err => console.log(err))

    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
        console.log(project)
    }
    
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do Projeto"
                handleOnChange={handleChange}
            />
            <Input 
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
            />
            
            <Select 
                name='category_id' 
                text='Selecione a categoria' 
                options={categories}
            />

            <SubmitBotton text={btnText}/>
        </form>
    )
}

export default ProjectForm;