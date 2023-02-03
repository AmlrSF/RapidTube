import React from 'react'
import './Comment.css'
import {useNavigate} from 'react-router-dom';
const Comments = ({comments}) => {
    const navigate = useNavigate();
    console.log(comments)
  return (
    <div>
        {comments.map(comment=>(
            <div  className='comment  d-flex gap-5 mb-4'>
                    <img onClick={()=>navigate(`/channel/${comment?.snippet?.topLevelComment?.snippet?.authorChannelId?.value}`)} data-img={comment?.snippet?.topLevelComment?.snippet?.authorDisplayName.slice(0,1)} className='comment-img' src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}/>
                    <div className='comment-info'>
                        <div className='d-flex gap-2'>
                            <h4 onClick={()=>navigate(`/channel/${comment?.snippet?.topLevelComment?.snippet?.authorChannelId?.value}`)}>{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h4>
                            <p className='text-secondary'>{new Date(comment?.snippet?.topLevelComment?.snippet?.updatedAt).getHours()} hours</p>
                        </div>
                        <h4>{comment?.snippet?.topLevelComment?.snippet?.textOriginal}</h4>
                        <div className='d-flex gap-3 align-itels-center' >
                            <span className='d-flex text-danger gap-2 align-items-center'><i class="fa-solid fa-thumbs-up"></i>
                            {comment?.snippet?.topLevelComment?.snippet?.likeCount}
                            </span>
                            <span className='d-flex gap-2 text-success align-items-center'><i class="fa-solid fa-reply"></i>
                                {comment?.snippet?.topLevelComment?.snippet?.totalReplyCount || 0} 
                            </span>
                        </div>
                            <div className='fs-5 d-flex align-items-center gap-2 text-primary'><i class="fa-sharp fa-solid fa-caret-down"></i>
                            reponse
                        </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Comments