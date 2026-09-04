/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesAnomalyInvestigationResponseAttributes } from "./TimeseriesAnomalyInvestigationResponseAttributes";
import { TimeseriesAnomalyInvestigationResponseID } from "./TimeseriesAnomalyInvestigationResponseID";
import { TimeseriesAnomalyInvestigationType } from "./TimeseriesAnomalyInvestigationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API resource containing anomaly investigation results.
 */
export class TimeseriesAnomalyInvestigationResponseData {
  /**
   * Attributes of an anomaly investigation response.
   */
  "attributes": TimeseriesAnomalyInvestigationResponseAttributes;
  /**
   * Stable identifier for an anomaly investigation response resource.
   */
  "id": TimeseriesAnomalyInvestigationResponseID;
  /**
   * Resource type for a timeseries anomaly investigation.
   */
  "type": TimeseriesAnomalyInvestigationType;

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
      type: "TimeseriesAnomalyInvestigationResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "TimeseriesAnomalyInvestigationResponseID",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TimeseriesAnomalyInvestigationType",
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
    return TimeseriesAnomalyInvestigationResponseData.attributeTypeMap;
  }

  public constructor() {}
}
