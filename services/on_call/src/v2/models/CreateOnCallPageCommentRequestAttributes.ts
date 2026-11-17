import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating a comment on an On-Call Page.
 */
export class CreateOnCallPageCommentRequestAttributes {
  /**
   * The content of the comment.
   */
  "body": string;
  /**
   * The IDs of the users mentioned in the comment.
   */
  "mentionedUserIds"?: Array<string>;
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
    body: {
      baseName: "body",
      type: "string",
      required: true,
    },
    mentionedUserIds: {
      baseName: "mentioned_user_ids",
      type: "Array<string>",
      format: "uuid",
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
    return CreateOnCallPageCommentRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
