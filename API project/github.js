class Github {
    constructor() {
        this.client_id = '63a503b7088c6222e8dd';
        this.client_secret = '56f6d53b9c14eab0501be57773f9ea1a89da7106';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUsers(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);

        // const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?
        // per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}
        // &client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    }


}


