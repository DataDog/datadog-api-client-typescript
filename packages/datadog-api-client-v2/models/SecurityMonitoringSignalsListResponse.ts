/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignal } from "./SecurityMonitoringSignal";
import { SecurityMonitoringSignalsListResponseLinks } from "./SecurityMonitoringSignalsListResponseLinks";
import { SecurityMonitoringSignalsListResponseMeta } from "./SecurityMonitoringSignalsListResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response object with all security signals matching the request
 * and pagination information.
 */
export class SecurityMonitoringSignalsListResponse {
  /**
   * An array of security signals matching the request.
   */
  "data"?: Array<SecurityMonitoringSignal>;
  /**
   * Links attributes.
   */
  "links"?: SecurityMonitoringSignalsListResponseLinks;
  /**
   * Meta attributes.
   */
  "meta"?: SecurityMonitoringSignalsListResponseMeta;

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
      type: "Array<SecurityMonitoringSignal>",
    },
    links: {
      baseName: "links",
      type: "SecurityMonitoringSignalsListResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "SecurityMonitoringSignalsListResponseMeta",
    },
  };
}
