export const CreatePet = () => {
    return (
        <div className="container-register">
            <div className="title sign">Add Pet</div>
            <div className="content">
                <form >
                    <div className="game-details">
                        <div className="input-box">
                            <span className="details">Name</span>
                            <input type="text" name="name" placeholder="Enter Name"  required />
                            
                        </div>
                        <div className="input-box">
                            <span className="details">Age</span>
                            <input type="text" name="age" placeholder="Enter Age"  required />
                            
                        </div>
                        <div className="input-box">
                            <span className="details">Gender</span>
                            <input type="text" name="gender" placeholder="Enter Gender"   required />
                           
                        </div>
                        <div className="input-box">
                            <span className="details">Summary</span>
                            <input type="text" name="summary" placeholder="Type summary"  required />
        
                        </div>
                        <div className="input-box">
                            <span className="details">Kind</span>
                            <select name="genre">
                                <option value="business">Dog</option>
                                <option value="horror">Cat</option>
                                <option value="fictional">Parrot</option>
                                <option value="romantic">Mice</option>
                                <option value="adventure">Fish</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <span className="details">Image</span>
                            <input type="text" name="image" placeholder="Enter Image Url"  required />
                            
                        </div>
                        <div className="input-box">
                            <span className="details"></span>
                            <input type="hidden" name="liked" defaultValue={false} />
                        </div>
                        <div className="input-box">
                            <span className="details"></span>
                            <input type="hidden" name="total_likes" value={0} />
                        </div>
                        <div className="input-box">
                            <span className="details"></span>
                            <input type="hidden" name="liked_by" defaultValue={['default', 'default']} />
                        </div>
                        <div className="input-box">
                            <span className="details"></span>
                            <input type="hidden" name="reviews" defaultValue={[]} />
                        </div>
                    </div>

                    <div className="button-book">
                        <input type="submit" value="Add Pet" />
                    </div>
                </form>
            </div>
        </div>

    )
}