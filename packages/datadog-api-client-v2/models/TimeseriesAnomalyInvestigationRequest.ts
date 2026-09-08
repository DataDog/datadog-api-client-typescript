/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesAnomalyInvestigationRequestData } from "./TimeseriesAnomalyInvestigationRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to investigate a metrics timeseries for anomalies.
 */
export class TimeseriesAnomalyInvestigationRequest {
  /**
   * JSON:API resource containing an anomaly investigation request.
   */
  "data": TimeseriesAnomalyInvestigationRequestData;

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
      type: "TimeseriesAnomalyInvestigationRequestData",
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
    return TimeseriesAnomalyInvestigationRequest.attributeTypeMap;
  }

  public constructor() {}
}
