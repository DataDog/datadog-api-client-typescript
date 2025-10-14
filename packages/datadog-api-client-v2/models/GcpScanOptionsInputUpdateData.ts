/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GcpScanOptionsInputUpdateDataAttributes } from "./GcpScanOptionsInputUpdateDataAttributes";
import { GcpScanOptionsInputUpdateDataType } from "./GcpScanOptionsInputUpdateDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating the scan options of a single GCP project.
 */
export class GcpScanOptionsInputUpdateData {
  /**
   * Attributes for updating GCP scan options configuration.
   */
  "attributes"?: GcpScanOptionsInputUpdateDataAttributes;
  /**
   * The GCP project ID.
   */
  "id": string;
  /**
   * GCP scan options resource type.
   */
  "type": GcpScanOptionsInputUpdateDataType;

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
      type: "GcpScanOptionsInputUpdateDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GcpScanOptionsInputUpdateDataType",
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
    return GcpScanOptionsInputUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
