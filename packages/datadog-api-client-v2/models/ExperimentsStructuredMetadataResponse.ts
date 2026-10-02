/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsPatchExperimentV2ResponseDataAttributesStructuredMetadataItemsFieldType } from "./ExperimentsPatchExperimentV2ResponseDataAttributesStructuredMetadataItemsFieldType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata field values with their display name and type.
 */
export class ExperimentsStructuredMetadataResponse {
  /**
   * Selected values for an enumerated metadata field.
   */
  "enumValues"?: Array<string>;
  /**
   * Display name of the metadata field.
   */
  "fieldDisplayName"?: string;
  /**
   * Key that identifies the metadata field.
   */
  "fieldKey": string;
  /**
   * Type of value stored in the structured metadata field.
   */
  "fieldType"?: ExperimentsPatchExperimentV2ResponseDataAttributesStructuredMetadataItemsFieldType;
  /**
   * Text value for a free-text metadata field.
   */
  "freetextValue"?: string;

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
    enumValues: {
      baseName: "enum_values",
      type: "Array<string>",
    },
    fieldDisplayName: {
      baseName: "field_display_name",
      type: "string",
    },
    fieldKey: {
      baseName: "field_key",
      type: "string",
      required: true,
    },
    fieldType: {
      baseName: "field_type",
      type: "ExperimentsPatchExperimentV2ResponseDataAttributesStructuredMetadataItemsFieldType",
    },
    freetextValue: {
      baseName: "freetext_value",
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
    return ExperimentsStructuredMetadataResponse.attributeTypeMap;
  }

  public constructor() {}
}
