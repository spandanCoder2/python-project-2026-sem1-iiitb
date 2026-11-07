from fastapi import FastAPI, HTTPException
from pydantic import Field, BaseModel
app = FastAPI()

events = [
    {"name" : "ABCD" , "club" : "XYZW", "date" : "11/07/2026", "SPOC" : "Mr/Mrs. PQRS" ,
        "time" : "19:00" , "campus" : "Extension" , "venue" : "E106"}
]


@app.get("/health")
def health():
    return {"server is OK!"}

@app.get("/events")
def get_events():
    return events