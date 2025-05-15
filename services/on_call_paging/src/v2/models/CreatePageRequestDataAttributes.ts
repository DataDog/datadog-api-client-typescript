import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreatePageRequestDataAttributesTarget } from "./CreatePageRequestDataAttributesTarget";
import { PageUrgency } from "./PageUrgency";

/**
 * Details about the On-Call Page you want to create.
 */
export class CreatePageRequestDataAttributes {
  /**
   * A short summary of the issue or context.
   */
  "description"?: string;
  /**
   * Tags to help categorize or filter the page.
   */
  "tags"?: Array<string>;
  /**
   * Information about the target to notify (such as a team or user).
   */
  "target": CreatePageRequestDataAttributesTarget;
  /**
   * The title of the page.
   */
  "title": string;
  /**
   * On-Call Page urgency level.
   */
  "urgency": PageUrgency;
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
    description: {
      baseName: "description",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    target: {
      baseName: "target",
      type: "CreatePageRequestDataAttributesTarget",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    urgency: {
      baseName: "urgency",
      type: "PageUrgency",
      required: true,
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
    return CreatePageRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
