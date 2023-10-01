import sun from '../../assets/images/sun.svg'
import planned from '../../assets/images/planned.svg'
import important from '../../assets/images/important.svg'
import tasks from '../../assets/images/tasks.svg'
import assign from '../../assets/images/assign_to_me.svg'

interface Sidebar {
    id: number,
    img: string,
    title: string,
    path: string
}

export const sidebar:Sidebar[] = [
    {
        id: 1,
        img: sun,
        title: 'My day',
        path: '/myday'
    },
    {
        id: 2,
        img: important,
        title: 'Important',
        path: '/important'

    },
    {
        id: 3,
        img: planned,
        title: 'Planned',
        path: '/planned'

    },
    {
        id: 4,
        img: assign,
        title: 'Assigned to me',
        path: '/assigned_to_me'

    },
    {
        id: 5,
        img: tasks,
        title: 'Tasks',
        path: '/inbox'

    },
]