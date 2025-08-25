/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConvertJobResultsToSignalsAttributes } from "./ConvertJobResultsToSignalsAttributes";
import { ConvertJobResultsToSignalsDataType } from "./ConvertJobResultsToSignalsDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for converting historical job results to signals.
 */
export class ConvertJobResultsToSignalsData {
  /**
   * Attributes for converting historical job results to signals.
   */
  "attributes"?: ConvertJobResultsToSignalsAttributes;
  /**
   * Type of payload.
   */
  "type"?: ConvertJobResultsToSignalsDataType;

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
      type: "ConvertJobResultsToSignalsAttributes",
    },
    type: {
      baseName: "type",
      type: "ConvertJobResultsToSignalsDataType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ConvertJobResultsToSignalsData.attributeTypeMap;
  }

  public constructor() {}
}
