import nc from 'next-connect';
import notes from '../../../components/data/data';

const handler = nc()

.post((req,res) => {
    const notes = {
        ...req.body,
        id: Date.now()
    }
    notes.push(note)
    res.json({data: note})
})
.get((req,res) => {
    res.json({data: notes})
})

export default hanlder;