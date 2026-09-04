/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesAnomalyInvestigationTimeseriesRequest } from "./TimeseriesAnomalyInvestigationTimeseriesRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an anomaly investigation request.
 */
export class TimeseriesAnomalyInvestigationRequestAttributes {
  /**
   * Timeseries requests to investigate. This API version accepts exactly one request.
   */
  "requests": [TimeseriesAnomalyInvestigationTimeseriesRequest];

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
    requests: {
      baseName: "requests",
      type: "[TimeseriesAnomalyInvestigationTimeseriesRequest]",
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
    return TimeseriesAnomalyInvestigationRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
