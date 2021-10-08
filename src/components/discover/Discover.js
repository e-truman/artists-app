import { useHistory } from "react-router-dom"
import { Card, CardTitle, CardText } from 'reactstrap';
import './Discover.css';



export const Discover = (props) => {
    const history = useHistory()
    return (
        <>
            <Card body>
                <CardTitle tag="h5">MORNING PAGES</CardTitle>
                <CardText>Morning Pages are three pages of stream of consciousness writing,
                    done first thing in the morning. They "clear the cobwebs" out of your brain so you have more room for your creative pursuits. *There is no wrong way to do Morning Pages*–
                    they are not high art. They are not even “writing.” They are about
                    anything and everything that crosses your mind– and they are for your eyes
                    only. Morning Pages provoke, clarify, comfort, cajole, prioritize and
                    synchronize the day at hand. Do not over-think Morning Pages: just put
                    three pages of anything on the page...and then do three more pages tomorrow.</CardText>

            </Card>

            <Card body>
                <CardTitle tag="h5">BLURTS</CardTitle>
                <CardText>Oftentimes, we get in the way of ourselves. The morning pages can help us bring these unhelpful thoughts- blurts- to the surface. Common blurts for artists include: "It's too late. If I haven't become a sucessful artist by now, I never will", "I am not talented enough to be a writer/musician/painter etc...", "I am wasting my time," or "If my ideas are bad I will look like a fool." By reframing our blurts, we can learn to focus on the process of creation rather than the result. After all, you have to make the bad art before you can make good art. </CardText>

            </Card>

            <Card body>
                <CardTitle tag="h5">ARTIST DATES</CardTitle>
                <CardText>No one can create in a vacuum. Make time in your personal and professional calendar to block out uninterrupted time—just for you in order to get re-inspired to be creative.</CardText>

            </Card>

            <button className="btn btn-secondary" id="back-button" onClick={() => history.push("/")}>HOME</button>
        </>
    )
}