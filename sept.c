#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

#define N 5

sem_t S[N];

void *philosopher(void *arg)
{
    int i = *(int *)arg;

    printf("Philosopher %d is thinking\n", i);
    sleep(1);

    printf("Philosopher %d is hungry\n", i);

    // Take left fork
    sem_wait(&S[i]);

    // Take right fork
    sem_wait(&S[(i + 1) % N]);

    printf("Philosopher %d is eating\n", i);
    sleep(2);

    // Put down left fork
    sem_post(&S[i]);

    // Put down right fork
    sem_post(&S[(i + 1) % N]);

    printf("Philosopher %d finished eating\n", i);

    return NULL;
}

int main()
{
    pthread_t p[N];
    int id[N];

    // Initialize all forks
    for (int i = 0; i < N; i++)
    {
        sem_init(&S[i], 0, 1);
    }

    // Create philosophers
    for (int i = 0; i < N; i++)
    {
        id[i] = i;
        pthread_create(&p[i], NULL, philosopher, &id[i]);
    }

    // Wait for philosophers
    for (int i = 0; i < N; i++)
    {
        pthread_join(p[i], NULL);
    }

    // Destroy semaphores
    for (int i = 0; i < N; i++)
    {
        sem_destroy(&S[i]);
    }

    return 0;
}