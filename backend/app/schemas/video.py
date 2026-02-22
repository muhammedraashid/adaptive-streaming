

from pydantic import BaseModel


class VideoResponse(BaseModel):
    id:int
    title:str
    filename:str

    class Config:
        from_attributes = True