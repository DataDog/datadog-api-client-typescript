import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FeatureFlagDistributionChannel } from "./FeatureFlagDistributionChannel";
import { UpdateFeatureFlagStalenessStatus } from "./UpdateFeatureFlagStalenessStatus";

/**
 * Attributes for updating a feature flag.
 */
export class UpdateFeatureFlagAttributes {
  /**
   * The description of the feature flag.
   */
  "description"?: string;
  /**
   * The distribution channel for the feature flag.
   */
  "distributionChannel"?: FeatureFlagDistributionChannel;
  /**
   * JSON schema for validation when value_type is JSON.
   */
  "jsonSchema"?: string;
  /**
   * The name of the feature flag.
   */
  "name"?: string;
  /**
   * The lifecycle to set. `ACTIVE` makes the flag temporary; `PERMANENT` excludes it from
   * staleness detection. Either value clears any snooze; omit the field to keep the lifecycle.
   * Do not copy the top-level `staleness_status` from a response into this field: that legacy
   * response field is always `ACTIVE`.
   */
  "stalenessStatus"?: UpdateFeatureFlagStalenessStatus;
  /**
   * Tags associated with the feature flag. This field replaces the full set of
   * existing tags; omit it to leave tags unchanged, or pass an empty array to
   * clear all tags. The owning team is set by including a tag of the form
   * `team:<team-handle>` in this array.
   */
  "tags"?: Array<string>;
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
    distributionChannel: {
      baseName: "distribution_channel",
      type: "FeatureFlagDistributionChannel",
    },
    jsonSchema: {
      baseName: "json_schema",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    stalenessStatus: {
      baseName: "staleness_status",
      type: "UpdateFeatureFlagStalenessStatus",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return UpdateFeatureFlagAttributes.attributeTypeMap;
  }

  public constructor() {}
}
