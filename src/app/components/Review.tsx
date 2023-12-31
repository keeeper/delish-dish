"use client";
import { useState } from "react";
import StarRating from "@/app/components/StarRating";
import { FormDataProps } from "@/types/types";

const Review = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [formData, setFormData] = useState<FormDataProps>({
    rating: 0,
    review: ''
  })

  const onToggleHandler = () => {
    setIsOpened(!isOpened);
  }
  
  const onInputChangeHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      review: e.target.value
    });
    if (message) setMessage('');
  }

  const onRatingChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: Number(e.target.value)
    });
    if (message) setMessage('');
  };
  
  const onSubmitHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setMessage('Review data is successfully logged to console');
    onClearHandler();
  }

  const onClearHandler = () => {
    setFormData({
      ...formData,
      rating: 0,
      review: ''
    })
  }

  return (
    <div className="pt-6 mt-6 border-t">
      <button type="button" onClick={onToggleHandler} className="btn-outline">Rate this recipe</button>
      {isOpened && (
        <form onSubmit={onSubmitHandler} className="mt-10">
          <StarRating handleRatingChange={onRatingChangeHandler} rating={formData.rating}/>
          <label className="block text-text-primary-clr mb-2 mt-4">Feel free to add your thoughts (optional):</label>
          <textarea 
            placeholder="You opinion here..." 
            value={formData.review} 
            onChange={onInputChangeHandler} 
            rows={5}
            className="border border-text-secondary-clr rounded px-3 py-2 w-full min-h-full focus:outline-theme-primary-clr leading-5" 
          />
          <div className="flex items-center mt-4">
            <button 
              disabled={!formData.rating} 
              type="submit" 
              className="btn-primary">
                Submit review
            </button>
            {message && <p className="ml-6 text-text-secondary-clr">{message}</p>}
          </div>
        </form>
      )}
    </div>
  )
}

export default Review;