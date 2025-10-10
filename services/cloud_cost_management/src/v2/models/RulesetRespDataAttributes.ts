import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RulesetRespDataAttributesCreated } from "./RulesetRespDataAttributesCreated";
import { RulesetRespDataAttributesModified } from "./RulesetRespDataAttributesModified";
import { RulesetRespDataAttributesRulesItems } from "./RulesetRespDataAttributesRulesItems";

/**
 * The definition of `RulesetRespDataAttributes` object.
 */
export class RulesetRespDataAttributes {
  /**
   * The definition of `RulesetRespDataAttributesCreated` object.
   */
  "created": RulesetRespDataAttributesCreated;
  /**
   * The `attributes` `enabled`.
   */
  "enabled": boolean;
  /**
   * The `attributes` `last_modified_user_uuid`.
   */
  "lastModifiedUserUuid": string;
  /**
   * The definition of `RulesetRespDataAttributesModified` object.
   */
  "modified": RulesetRespDataAttributesModified;
  /**
   * The `attributes` `name`.
   */
  "name": string;
  /**
   * The `attributes` `position`.
   */
  "position": number;
  /**
   * The `attributes` `processing_status`.
   */
  "processingStatus"?: string;
  /**
   * The `attributes` `rules`.
   */
  "rules": Array<RulesetRespDataAttributesRulesItems>;
  /**
   * The `attributes` `version`.
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
    created: {
      baseName: "created",
      type: "RulesetRespDataAttributesCreated",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    lastModifiedUserUuid: {
      baseName: "last_modified_user_uuid",
      type: "string",
      required: true,
    },
    modified: {
      baseName: "modified",
      type: "RulesetRespDataAttributesModified",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    position: {
      baseName: "position",
      type: "number",
      required: true,
      format: "int32",
    },
    processingStatus: {
      baseName: "processing_status",
      type: "string",
    },
    rules: {
      baseName: "rules",
      type: "Array<RulesetRespDataAttributesRulesItems>",
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
    return RulesetRespDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
