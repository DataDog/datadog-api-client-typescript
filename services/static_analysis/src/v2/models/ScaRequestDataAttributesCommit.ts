import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `ScaRequestDataAttributesCommit` object.
 */
export class ScaRequestDataAttributesCommit {
  /**
   * The `commit` `author_date`.
   */
  "authorDate"?: string;
  /**
   * The `commit` `author_email`.
   */
  "authorEmail"?: string;
  /**
   * The `commit` `author_name`.
   */
  "authorName"?: string;
  /**
   * The `commit` `branch`.
   */
  "branch"?: string;
  /**
   * The `commit` `committer_email`.
   */
  "committerEmail"?: string;
  /**
   * The `commit` `committer_name`.
   */
  "committerName"?: string;
  /**
   * The `commit` `sha`.
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
