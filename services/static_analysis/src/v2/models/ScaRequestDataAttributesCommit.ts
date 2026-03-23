import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata about the commit associated with the SCA scan, including author, committer, and branch information.
 */
export class ScaRequestDataAttributesCommit {
  /**
   * The date when the commit was authored.
   */
  "authorDate"?: string;
  /**
   * The email address of the commit author.
   */
  "authorEmail"?: string;
  /**
   * The full name of the commit author.
   */
  "authorName"?: string;
  /**
   * The branch name on which the commit was made.
   */
  "branch"?: string;
  /**
   * The email address of the person who committed the change.
   */
  "committerEmail"?: string;
  /**
   * The full name of the person who committed the change.
   */
  "committerName"?: string;
  /**
   * The SHA hash uniquely identifying the commit.
   */
  "sha"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    authorDate: {
      baseName: "author_date",
      type: "string",
    },
    authorEmail: {
      baseName: "author_email",
      type: "string",
    },
    authorName: {
      baseName: "author_name",
      type: "string",
    },
    branch: {
      baseName: "branch",
      type: "string",
    },
    committerEmail: {
      baseName: "committer_email",
      type: "string",
    },
    committerName: {
      baseName: "committer_name",
      type: "string",
    },
    sha: {
      baseName: "sha",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScaRequestDataAttributesCommit.attributeTypeMap;
  }

  public constructor() {}
}
