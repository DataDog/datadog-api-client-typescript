import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotificationRuleTargetConfiguration } from "./NotificationRuleTargetConfiguration";
import { NotificationRuleTargetType } from "./NotificationRuleTargetType";

/**
 * A notification target that receives change alerts for a feature flag.
 */
export class NotificationRuleTarget {
  /**
   * Configuration for a notification target. Which fields apply depends on the target's `type`.
   */
  "configuration": NotificationRuleTargetConfiguration;
  /**
   * The type of notification target.
   */
  "type": NotificationRuleTargetType;
  /**
   * Schema version of `configuration`.
   */
  "version": number;
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
    configuration: {
      baseName: "configuration",
      type: "NotificationRuleTargetConfiguration",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotificationRuleTargetType",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int64",
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
    return NotificationRuleTarget.attributeTypeMap;
  }

  public constructor() {}
}
