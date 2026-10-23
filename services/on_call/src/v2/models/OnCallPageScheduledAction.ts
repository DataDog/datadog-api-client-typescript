import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageScheduledActionAttributes } from "./OnCallPageScheduledActionAttributes";
import { OnCallPageScheduledActionRelationships } from "./OnCallPageScheduledActionRelationships";
import { OnCallPageScheduledActionType } from "./OnCallPageScheduledActionType";

/**
 * The next action scheduled on a page, such as an escalation or an automatic resolution.
 */
export class OnCallPageScheduledAction {
  /**
   * The attributes of a scheduled action.
   */
  "attributes"?: OnCallPageScheduledActionAttributes;
  /**
   * The ID of the scheduled action. Equal to the page ID.
   */
  "id": string;
  /**
   * The relationships of a scheduled action.
   */
  "relationships"?: OnCallPageScheduledActionRelationships;
  /**
   * Scheduled action resource type.
   */
  "type": OnCallPageScheduledActionType;
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
    attributes: {
      baseName: "attributes",
      type: "OnCallPageScheduledActionAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "OnCallPageScheduledActionRelationships",
    },
    type: {
      baseName: "type",
      type: "OnCallPageScheduledActionType",
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
    return OnCallPageScheduledAction.attributeTypeMap;
  }

  public constructor() {}
}
