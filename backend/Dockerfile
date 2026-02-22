FROM python:3.11-slim

# environment settings
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# copy project
COPY . .

# create non-root user
RUN useradd -m appuser
USER appuser

# start server
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]