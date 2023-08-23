/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMApplicationList } from "./RUMApplicationList";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * RUM applications response.
 */
export class RUMApplicationsResponse {
  /**
   * RUM applications array response.
   */
  "data"?: Array<RUMApplicationList>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "Array<RUMApplicationList>",
    },
  };
}
