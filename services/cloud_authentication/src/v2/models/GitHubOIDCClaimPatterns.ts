import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * GitHub Actions OIDC claims to match against. Each field is a regular expression.
 * The `sub` claim is required; all other claims are optional. A token matches only when
 * all provided patterns match simultaneously (AND semantics).
 */
export class GitHubOIDCClaimPatterns {
  /**
   * Regular expression matched against the `actor` claim.
   */
  "actor"?: string;
  /**
   * Regular expression matched against the `actor_id` claim.
   */
  "actorId"?: string;
  /**
   * Regular expression matched against the `enterprise` claim.
   */
  "enterprise"?: string;
  /**
   * Regular expression matched against the `enterprise_id` claim.
   */
  "enterpriseId"?: string;
  /**
   * Regular expression matched against the `environment` claim.
   */
  "environment"?: string;
  /**
   * Regular expression matched against the `event_name` claim.
   */
  "eventName"?: string;
  /**
   * Regular expression matched against the `job_workflow_ref` claim.
   */
  "jobWorkflowRef"?: string;
  /**
   * Regular expression matched against the `ref` claim.
   */
  "ref"?: string;
  /**
   * Regular expression matched against the `ref_type` claim.
   */
  "refType"?: string;
  /**
   * Regular expression matched against the `repository` claim.
   */
  "repository"?: string;
  /**
   * Regular expression matched against the `repository_id` claim.
   */
  "repositoryId"?: string;
  /**
   * Regular expression matched against the `repository_owner` claim.
   */
  "repositoryOwner"?: string;
  /**
   * Regular expression matched against the `repository_owner_id` claim.
   */
  "repositoryOwnerId"?: string;
  /**
   * Regular expression matched against the `repository_visibility` claim.
   */
  "repositoryVisibility"?: string;
  /**
   * Regular expression matched against the `runner_environment` claim.
   */
  "runnerEnvironment"?: string;
  /**
   * Regular expression matched against the entire `sub` (subject) claim, the primary GitHub Actions OIDC
   * identifier (for example, `repo:<OWNER>/<REPO>:ref:refs/heads/main`). The pattern must begin with
   * `repo:<OWNER>/`, where `<OWNER>` is a literal repository-owner name rather than a regular expression.
   */
  "sub": string;
  /**
   * Regular expression matched against the `workflow` claim.
   */
  "workflow"?: string;
  /**
   * Regular expression matched against the `workflow_ref` claim.
   */
  "workflowRef"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    actor: {
      baseName: "actor",
      type: "string",
    },
    actorId: {
      baseName: "actor_id",
      type: "string",
    },
    enterprise: {
      baseName: "enterprise",
      type: "string",
    },
    enterpriseId: {
      baseName: "enterprise_id",
      type: "string",
    },
    environment: {
      baseName: "environment",
      type: "string",
    },
    eventName: {
      baseName: "event_name",
      type: "string",
    },
    jobWorkflowRef: {
      baseName: "job_workflow_ref",
      type: "string",
    },
    ref: {
      baseName: "ref",
      type: "string",
    },
    refType: {
      baseName: "ref_type",
      type: "string",
    },
    repository: {
      baseName: "repository",
      type: "string",
    },
    repositoryId: {
      baseName: "repository_id",
      type: "string",
    },
    repositoryOwner: {
      baseName: "repository_owner",
      type: "string",
    },
    repositoryOwnerId: {
      baseName: "repository_owner_id",
      type: "string",
    },
    repositoryVisibility: {
      baseName: "repository_visibility",
      type: "string",
    },
    runnerEnvironment: {
      baseName: "runner_environment",
      type: "string",
    },
    sub: {
      baseName: "sub",
      type: "string",
      required: true,
    },
    workflow: {
      baseName: "workflow",
      type: "string",
    },
    workflowRef: {
      baseName: "workflow_ref",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GitHubOIDCClaimPatterns.attributeTypeMap;
  }

  public constructor() {}
}
