/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOCorrectionCreateData } from "./SLOCorrectionCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An object that defines a correction to be applied to an SLO.
 */
export class SLOCorrectionCreateRequest {
  /**
   * The data object associated with the SLO correction to be created.
   */
  "data"?: SLOCorrectionCreateData;

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
      type: "SLOCorrectionCreateData",
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
    return SLOCorrectionCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
