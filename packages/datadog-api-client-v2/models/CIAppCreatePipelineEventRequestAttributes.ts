/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppCreatePipelineEventRequestAttributesResource } from "./CIAppCreatePipelineEventRequestAttributesResource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the pipeline event to create.
 */
export class CIAppCreatePipelineEventRequestAttributes {
  /**
   * The Datadog environment.
   */
  "env"?: string;
  /**
   * Details of the CI pipeline event.
   */
  "resource": CIAppCreatePipelineEventRequestAttributesResource;
  /**
   * If the CI provider is SaaS, use this to differentiate between instances.
   */
  "service"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    env: {
      baseName: "env",
      type: "string",
    },
    resource: {
      baseName: "resource",
      type: "CIAppCreatePipelineEventRequestAttributesResource",
      required: true,
    },
    service: {
      baseName: "service",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CIAppCreatePipelineEventRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
