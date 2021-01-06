import { PullRequestPayload, PullRequest } from "../github";

/**
 * Constructed in parts (and slightly modified to fit the type definitions) from
 * https://docs.github.com/en/free-pro-team@latest/rest/reference
 *
 * With additional constants for testing
 */

// USERS
const user_octocat = {
  login: "octocat",
  id: 1,
  node_id: "MDQ6VXNlcjE=",
  avatar_url: "https://github.com/images/error/octocat_happy.gif",
  gravatar_id: "",
  url: "https://api.github.com/users/octocat",
  html_url: "https://github.com/octocat",
  followers_url: "https://api.github.com/users/octocat/followers",
  following_url: "https://api.github.com/users/octocat/following{/other_user}",
  gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
  starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
  organizations_url: "https://api.github.com/users/octocat/orgs",
  repos_url: "https://api.github.com/users/octocat/repos",
  events_url: "https://api.github.com/users/octocat/events{/privacy}",
  received_events_url: "https://api.github.com/users/octocat/received_events",
  type: "User",
  site_admin: false,
};
const user_hubot = {
  login: "hubot",
  id: 1,
  node_id: "MDQ6VXNlcjE=",
  avatar_url: "https://github.com/images/error/hubot_happy.gif",
  gravatar_id: "",
  url: "https://api.github.com/users/hubot",
  html_url: "https://github.com/hubot",
  followers_url: "https://api.github.com/users/hubot/followers",
  following_url: "https://api.github.com/users/hubot/following{/other_user}",
  gists_url: "https://api.github.com/users/hubot/gists{/gist_id}",
  starred_url: "https://api.github.com/users/hubot/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/hubot/subscriptions",
  organizations_url: "https://api.github.com/users/hubot/orgs",
  repos_url: "https://api.github.com/users/hubot/repos",
  events_url: "https://api.github.com/users/hubot/events{/privacy}",
  received_events_url: "https://api.github.com/users/hubot/received_events",
  type: "User",
  site_admin: true,
};
const user_other = {
  login: "other_user",
  id: 1,
  node_id: "MDQ6VXNlcjE=",
  avatar_url: "https://github.com/images/error/other_user_happy.gif",
  gravatar_id: "",
  url: "https://api.github.com/users/other_user",
  html_url: "https://github.com/other_user",
  followers_url: "https://api.github.com/users/other_user/followers",
  following_url:
    "https://api.github.com/users/other_user/following{/other_user}",
  gists_url: "https://api.github.com/users/other_user/gists{/gist_id}",
  starred_url: "https://api.github.com/users/other_user/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/other_user/subscriptions",
  organizations_url: "https://api.github.com/users/other_user/orgs",
  repos_url: "https://api.github.com/users/other_user/repos",
  events_url: "https://api.github.com/users/other_user/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/other_user/received_events",
  type: "User",
  site_admin: false,
};

// LABELS
const label_bug = {
  id: 208045946,
  node_id: "MDU6TGFiZWwyMDgwNDU5NDY=",
  url: "https://api.github.com/repos/octocat/Hello-World/labels/bug",
  name: "bug",
  // description: "Something isn't working",
  color: "f29513",
  default: true,
};
const label_backport_stable_0_25 = {
  id: 208045947,
  node_id: "YmFja3BvcnQgc3RhYmxlLzAuMjU=",
  url:
    "https://api.github.com/repos/octocat/Hello-World/labels/backport-stable-0-25",
  name: "backport stable/0.25",
  // description: "Backport to stable/0.25 branch",
  color: "f29513",
  default: true,
};

// REPO
const repo = {
  owner: "octocat",
  repo: "Hello-World",
};
const repo_helloworld = {
  id: 1296269,
  node_id: "MDEwOlJlcG9zaXRvcnkxMjk2MjY5",
  name: "Hello-World",
  full_name: "octocat/Hello-World",
  owner: user_octocat,
  private: false,
  html_url: "https://github.com/octocat/Hello-World",
  description: null,
  fork: false,
  url: "https://api.github.com/repos/octocat/Hello-World",
  archive_url:
    "https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}",
  assignees_url:
    "https://api.github.com/repos/octocat/Hello-World/assignees{/user}",
  blobs_url: "https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}",
  branches_url:
    "https://api.github.com/repos/octocat/Hello-World/branches{/branch}",
  collaborators_url:
    "https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}",
  comments_url:
    "https://api.github.com/repos/octocat/Hello-World/comments{/number}",
  commits_url: "https://api.github.com/repos/octocat/Hello-World/commits{/sha}",
  compare_url:
    "https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}",
  contents_url:
    "https://api.github.com/repos/octocat/Hello-World/contents/{+path}",
  contributors_url:
    "https://api.github.com/repos/octocat/Hello-World/contributors",
  deployments_url:
    "https://api.github.com/repos/octocat/Hello-World/deployments",
  downloads_url: "https://api.github.com/repos/octocat/Hello-World/downloads",
  events_url: "https://api.github.com/repos/octocat/Hello-World/events",
  forks_url: "https://api.github.com/repos/octocat/Hello-World/forks",
  git_commits_url:
    "https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}",
  git_refs_url:
    "https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}",
  git_tags_url:
    "https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}",
  git_url: "git:github.com/octocat/Hello-World.git",
  issue_comment_url:
    "https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}",
  issue_events_url:
    "https://api.github.com/repos/octocat/Hello-World/issues/events{/number}",
  issues_url:
    "https://api.github.com/repos/octocat/Hello-World/issues{/number}",
  keys_url: "https://api.github.com/repos/octocat/Hello-World/keys{/key_id}",
  labels_url: "https://api.github.com/repos/octocat/Hello-World/labels{/name}",
  languages_url: "https://api.github.com/repos/octocat/Hello-World/languages",
  merges_url: "https://api.github.com/repos/octocat/Hello-World/merges",
  milestones_url:
    "https://api.github.com/repos/octocat/Hello-World/milestones{/number}",
  notifications_url:
    "https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}",
  pulls_url: "https://api.github.com/repos/octocat/Hello-World/pulls{/number}",
  releases_url:
    "https://api.github.com/repos/octocat/Hello-World/releases{/id}",
  ssh_url: "git@github.com:octocat/Hello-World.git",
  stargazers_url: "https://api.github.com/repos/octocat/Hello-World/stargazers",
  statuses_url:
    "https://api.github.com/repos/octocat/Hello-World/statuses/{sha}",
  subscribers_url:
    "https://api.github.com/repos/octocat/Hello-World/subscribers",
  subscription_url:
    "https://api.github.com/repos/octocat/Hello-World/subscription",
  tags_url: "https://api.github.com/repos/octocat/Hello-World/tags",
  teams_url: "https://api.github.com/repos/octocat/Hello-World/teams",
  trees_url: "https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}",
  clone_url: "https://github.com/octocat/Hello-World.git",
  mirror_url: null,
  hooks_url: "https://api.github.com/repos/octocat/Hello-World/hooks",
  svn_url: "https://svn.github.com/octocat/Hello-World",
  homepage: null,
  language: null,
  forks_count: 9,
  stargazers_count: 80,
  watchers_count: 80,
  size: 108,
  default_branch: "master",
  open_issues_count: 0,
  // topics: [
  //   "octocat",
  //   "atom",
  //   "electron",
  //   "api"
  // ],
  has_issues: true,
  has_projects: true,
  has_wiki: true,
  has_pages: false,
  has_downloads: true,
  archived: false,
  disabled: false,
  pushed_at: "2011-01-26T19:06:43Z",
  created_at: "2011-01-26T19:01:12Z",
  updated_at: "2011-01-26T19:14:43Z",
  // permissions: {
  //   admin: false,
  //   push: false,
  //   pull: true
  // },
  allow_rebase_merge: true,
  // temp_clone_token: "ABTLWHOULUVAXGTRYU7OC2876QJ2O",
  allow_squash_merge: true,
  allow_merge_commit: true,
  forks: 123,
  open_issues: 123,
  license: null,
  watchers: 123,
};

// PULLS
class PullRequestFactory {
  public default(): PullRequest {
    return {
      url: "https://api.github.com/repos/octocat/Hello-World/pulls/1347",
      id: 1,
      node_id: "MDExOlB1bGxSZXF1ZXN0MQ==",
      html_url: "https://github.com/octocat/Hello-World/pull/1347",
      diff_url: "https://github.com/octocat/Hello-World/pull/1347.diff",
      patch_url: "https://github.com/octocat/Hello-World/pull/1347.patch",
      issue_url: "https://api.github.com/repos/octocat/Hello-World/issues/1347",
      commits_url:
        "https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits",
      review_comments_url:
        "https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments",
      review_comment_url:
        "https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}",
      comments_url:
        "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments",
      statuses_url:
        "https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e",
      number: 1347,
      state: "open",
      locked: true,
      title: "Amazing new feature",
      user: user_octocat,
      body: "Please pull these awesome changes in!",
      labels: [label_bug],
      milestone: {
        url: "https://api.github.com/repos/octocat/Hello-World/milestones/1",
        html_url: "https://github.com/octocat/Hello-World/milestones/v1.0",
        labels_url:
          "https://api.github.com/repos/octocat/Hello-World/milestones/1/labels",
        id: 1002604,
        node_id: "MDk6TWlsZXN0b25lMTAwMjYwNA==",
        number: 1,
        state: "open",
        title: "v1.0",
        description: "Tracking milestone for version 1.0",
        creator: user_octocat,
        open_issues: 4,
        closed_issues: 8,
        created_at: "2011-04-10T20:09:31Z",
        updated_at: "2014-03-03T18:58:10Z",
        closed_at: "2013-02-12T13:22:01Z",
        due_on: "2012-10-09T23:39:01Z",
      },
      // active_lock_reason: "too heated",
      created_at: "2011-01-26T19:01:12Z",
      updated_at: "2011-01-26T19:01:12Z",
      closed_at: "2011-01-26T19:01:12Z",
      merged_at: null,
      merge_commit_sha: "e5bd3914e2e596debea16f433f57875b5b90bcd6",
      assignee: user_octocat,
      assignees: [user_octocat, user_hubot],
      requested_reviewers: [user_other],
      requested_teams: [],
      head: {
        label: "octocat:new-topic",
        ref: "new-topic",
        sha: "6dcb09b5b57875f334f61aebed695e2e4193db5e",
        user: user_octocat,
        repo: repo_helloworld,
      },
      base: {
        label: "octocat:master",
        ref: "master",
        sha: "6dcb09b5b57875f334f61aebed695e2e4193db5e",
        user: user_octocat,
        repo: repo_helloworld,
      },
      _links: {
        self: {
          href: "https://api.github.com/repos/octocat/Hello-World/pulls/1347",
        },
        html: {
          href: "https://github.com/octocat/Hello-World/pull/1347",
        },
        issue: {
          href: "https://api.github.com/repos/octocat/Hello-World/issues/1347",
        },
        comments: {
          href:
            "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments",
        },
        review_comments: {
          href:
            "https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments",
        },
        review_comment: {
          href:
            "https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}",
        },
        commits: {
          href:
            "https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits",
        },
        statuses: {
          href:
            "https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e",
        },
      },
      author_association: "OWNER",
      draft: false,
      merged: false,
      mergeable: true,
      rebaseable: true,
      mergeable_state: "clean",
      merged_by: null,
      comments: 10,
      review_comments: 0,
      maintainer_can_modify: true,
      commits: 3,
      additions: 100,
      deletions: 3,
      changed_files: 5,
    };
  }
  public default_with_backport_label(): PullRequest {
    return {
      ...this.default(),
      labels: [label_backport_stable_0_25, label_bug],
    };
  }
  public backport_to_stable_0_25(): PullRequest {
    return {
      url: "https://api.github.com/repos/octocat/Hello-World/pulls/9001",
      id: 1,
      node_id: "MDExOlB1bGxSZXF1ZXN0MQ==",
      html_url: "https://github.com/octocat/Hello-World/pull/9001",
      diff_url: "https://github.com/octocat/Hello-World/pull/9001.diff",
      patch_url: "https://github.com/octocat/Hello-World/pull/9001.patch",
      issue_url: "https://api.github.com/repos/octocat/Hello-World/issues/9001",
      commits_url:
        "https://api.github.com/repos/octocat/Hello-World/pulls/9001/commits",
      review_comments_url:
        "https://api.github.com/repos/octocat/Hello-World/pulls/9001/comments",
      review_comment_url:
        "https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}",
      comments_url:
        "https://api.github.com/repos/octocat/Hello-World/issues/9001/comments",
      statuses_url:
        "https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e",
      number: 9001,
      state: "open",
      locked: true,
      title: "[Backport stable/0.25] Amazing new feature",
      user: user_octocat,
      body: "Backport of #1347",
      labels: [],
      milestone: {
        url: "https://api.github.com/repos/octocat/Hello-World/milestones/1",
        html_url: "https://github.com/octocat/Hello-World/milestones/v1.0",
        labels_url:
          "https://api.github.com/repos/octocat/Hello-World/milestones/1/labels",
        id: 1002604,
        node_id: "MDk6TWlsZXN0b25lMTAwMjYwNA==",
        number: 1,
        state: "open",
        title: "v1.0",
        description: "Tracking milestone for version 1.0",
        creator: user_octocat,
        open_issues: 4,
        closed_issues: 8,
        created_at: "2011-04-10T20:09:31Z",
        updated_at: "2014-03-03T18:58:10Z",
        closed_at: "2013-02-12T13:22:01Z",
        due_on: "2012-10-09T23:39:01Z",
      },
      // active_lock_reason: "too heated",
      created_at: "2011-01-26T19:01:12Z",
      updated_at: "2011-01-26T19:01:12Z",
      closed_at: null,
      merged_at: null,
      merge_commit_sha: "e5bd3914e2e596debea16f433f57875b5b90bcd6",
      assignee: user_octocat,
      assignees: [user_octocat, user_hubot], // todo check whether a newly created pr has assignees
      requested_reviewers: [],
      requested_teams: [],
      head: {
        label: "octocat:backport-stable/0.25",
        ref: "backport-stable/0.25",
        sha: "6dcb09b5b57875f334f61aebed695e2e4193db5e",
        user: user_octocat,
        repo: repo_helloworld,
      },
      base: {
        label: "octocat:stable/0.25",
        ref: "stable/0.25",
        sha: "6dcb09b5b57875f334f61aebed695e2e4193db5e",
        user: user_octocat,
        repo: repo_helloworld,
      },
      _links: {
        self: {
          href: "https://api.github.com/repos/octocat/Hello-World/pulls/9001",
        },
        html: {
          href: "https://github.com/octocat/Hello-World/pull/9001",
        },
        issue: {
          href: "https://api.github.com/repos/octocat/Hello-World/issues/9001",
        },
        comments: {
          href:
            "https://api.github.com/repos/octocat/Hello-World/issues/9001/comments",
        },
        review_comments: {
          href:
            "https://api.github.com/repos/octocat/Hello-World/pulls/9001/comments",
        },
        review_comment: {
          href:
            "https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}",
        },
        commits: {
          href:
            "https://api.github.com/repos/octocat/Hello-World/pulls/9001/commits",
        },
        statuses: {
          href:
            "https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e",
        },
      },
      author_association: "OWNER",
      draft: false,
      merged: false,
      mergeable: true,
      rebaseable: true,
      mergeable_state: "clean",
      merged_by: null,
      comments: 0,
      review_comments: 0,
      maintainer_can_modify: true,
      commits: 3,
      additions: 100,
      deletions: 3,
      changed_files: 5,
    };
  }
}

const pulls = new PullRequestFactory();

// PAYLOADS
type Payloads = { [key: string]: PullRequestPayload };
const payloads: Payloads = {
  default: {
    action: "action",
    number: 1,
    pull_request: pulls.default(),
    repository: repo_helloworld,
    sender: user_octocat,
    // assignee?: WebhookPayloadPullRequestAssignee;
    // installation?: WebhookPayloadPullRequestInstallation;
    // organization?: WebhookPayloadPullRequestOrganization;
    // label?: WebhookPayloadPullRequestLabel;
  },
  with_backport_label: {
    action: "action",
    number: 1,
    pull_request: pulls.default_with_backport_label(),
    repository: repo_helloworld,
    sender: user_octocat,
  },
};

export { payloads, repo, pulls };
