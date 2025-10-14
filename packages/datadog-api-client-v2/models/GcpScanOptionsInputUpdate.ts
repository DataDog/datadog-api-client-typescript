/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GcpScanOptionsInputUpdateData } from "./GcpScanOptionsInputUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request object for updating GCP scan options.
 */
export class GcpScanOptionsInputUpdate {
  /**
   * Data object for updating the scan options of a single GCP project.
   */
  "data"?: GcpScanOptionsInputUpdateData;

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
    data: {
      baseName: "data",
      type: "GcpScanOptionsInputUpdateData",
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
    return GcpScanOptionsInputUpdate.attributeTypeMap;
  }

  public constructor() {}
}
