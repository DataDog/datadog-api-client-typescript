/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayCaptureConfigurationResponseDataAttributesDefaultMode } from "./AiGatewayCaptureConfigurationResponseDataAttributesDefaultMode";
import { AiGatewayCaptureOverride } from "./AiGatewayCaptureOverride";
import { AiGatewayMetadataCaptureItem } from "./AiGatewayMetadataCaptureItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Organization default mode, scoped overrides, and current configuration revision.
 */
export class AiGatewayCaptureConfigurationResponseDataAttributes {
  /**
   * Opaque revision of the organization default and all overrides. Writes require the revision returned by a current read or preview.
   */
  "configurationRevision": string;
  /**
   * Items Metadata-only capture adds, each listed once. An item requires the items whose information it already reveals: `tool_output_size`, `tool_names` and `conversation_shape` require `tool_usage`, and `input_size_by_role` requires `tool_output_size`. A set that leaves out a required item is rejected. When several Metadata-only overrides match a request, it gets only the items all of them select.
   */
  "defaultMetadataCapture"?: Array<AiGatewayMetadataCaptureItem>;
  /**
   * Default capture mode for the organization. Change it in **Org defaults**.
   */
  "defaultMode": AiGatewayCaptureConfigurationResponseDataAttributesDefaultMode;
  /**
   * Scoped overrides currently configured for the organization.
   */
  "overrides": Array<AiGatewayCaptureOverride>;

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
    configurationRevision: {
      baseName: "configuration_revision",
      type: "string",
      required: true,
    },
    defaultMetadataCapture: {
      baseName: "default_metadata_capture",
      type: "Array<AiGatewayMetadataCaptureItem>",
    },
    defaultMode: {
      baseName: "default_mode",
      type: "AiGatewayCaptureConfigurationResponseDataAttributesDefaultMode",
      required: true,
    },
    overrides: {
      baseName: "overrides",
      type: "Array<AiGatewayCaptureOverride>",
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
    return AiGatewayCaptureConfigurationResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
