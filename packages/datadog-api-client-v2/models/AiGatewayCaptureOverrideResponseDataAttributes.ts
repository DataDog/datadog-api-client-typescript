/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayCaptureOverrideResponseDataAttributesMode } from "./AiGatewayCaptureOverrideResponseDataAttributesMode";
import { AiGatewayCaptureResponseScope } from "./AiGatewayCaptureResponseScope";
import { AiGatewayMetadataCaptureItem } from "./AiGatewayMetadataCaptureItem";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Saved name, capture mode, request filters, and revision of the override.
 */
export class AiGatewayCaptureOverrideResponseDataAttributes {
  /**
   * Items Metadata-only capture adds, each listed once. An item requires the items whose information it already reveals: `tool_output_size`, `tool_names` and `conversation_shape` require `tool_usage`, and `input_size_by_role` requires `tool_output_size`. A set that leaves out a required item is rejected. When several Metadata-only overrides match a request, it gets only the items all of them select.
   */
  "metadataCapture"?: Array<AiGatewayMetadataCaptureItem>;
  /**
   * Capture mode for matching traffic.
   */
  "mode": AiGatewayCaptureOverrideResponseDataAttributesMode;
  /**
   * Display name of the override. Names need not be unique; identify overrides by `id`.
   */
  "name": string;
  /**
   * Current override revision, required for replacement or deletion.
   */
  "revision": Int64;
  /**
   * Visible request filters. Provider and model tags are withheld when the caller cannot view them. An empty object or empty tags can represent a fully restricted scope; scope_restricted identifies redaction.
   */
  "scope": AiGatewayCaptureResponseScope;
  /**
   * Whether provider or model scope metadata was withheld. Omit unchanged scope on replacement to preserve it.
   */
  "scopeRestricted": boolean;

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
    metadataCapture: {
      baseName: "metadata_capture",
      type: "Array<AiGatewayMetadataCaptureItem>",
    },
    mode: {
      baseName: "mode",
      type: "AiGatewayCaptureOverrideResponseDataAttributesMode",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    revision: {
      baseName: "revision",
      type: "number",
      required: true,
      format: "int64",
    },
    scope: {
      baseName: "scope",
      type: "AiGatewayCaptureResponseScope",
      required: true,
    },
    scopeRestricted: {
      baseName: "scope_restricted",
      type: "boolean",
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
    return AiGatewayCaptureOverrideResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
