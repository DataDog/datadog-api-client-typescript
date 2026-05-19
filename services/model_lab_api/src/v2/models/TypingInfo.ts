import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ModelLabArtifactInfo } from "./ModelLabArtifactInfo";
import { ModelLabArtifactObjectInfo } from "./ModelLabArtifactObjectInfo";
import { ModelLabFacetKeysAttributes } from "./ModelLabFacetKeysAttributes";
import { ModelLabFacetKeysData } from "./ModelLabFacetKeysData";
import { ModelLabFacetKeysResponse } from "./ModelLabFacetKeysResponse";
import { ModelLabFacetValuesAttributes } from "./ModelLabFacetValuesAttributes";
import { ModelLabFacetValuesData } from "./ModelLabFacetValuesData";
import { ModelLabFacetValuesResponse } from "./ModelLabFacetValuesResponse";
import { ModelLabMetricStatRange } from "./ModelLabMetricStatRange";
import { ModelLabMetricSummary } from "./ModelLabMetricSummary";
import { ModelLabNumericRange } from "./ModelLabNumericRange";
import { ModelLabPageMeta } from "./ModelLabPageMeta";
import { ModelLabPageMetaPage } from "./ModelLabPageMetaPage";
import { ModelLabPaginationLinks } from "./ModelLabPaginationLinks";
import { ModelLabProjectArtifactsAttributes } from "./ModelLabProjectArtifactsAttributes";
import { ModelLabProjectArtifactsData } from "./ModelLabProjectArtifactsData";
import { ModelLabProjectArtifactsResponse } from "./ModelLabProjectArtifactsResponse";
import { ModelLabProjectAttributes } from "./ModelLabProjectAttributes";
import { ModelLabProjectData } from "./ModelLabProjectData";
import { ModelLabProjectResponse } from "./ModelLabProjectResponse";
import { ModelLabProjectsResponse } from "./ModelLabProjectsResponse";
import { ModelLabRunArtifactsAttributes } from "./ModelLabRunArtifactsAttributes";
import { ModelLabRunArtifactsData } from "./ModelLabRunArtifactsData";
import { ModelLabRunArtifactsResponse } from "./ModelLabRunArtifactsResponse";
import { ModelLabRunAttributes } from "./ModelLabRunAttributes";
import { ModelLabRunData } from "./ModelLabRunData";
import { ModelLabRunParam } from "./ModelLabRunParam";
import { ModelLabRunResponse } from "./ModelLabRunResponse";
import { ModelLabRunsResponse } from "./ModelLabRunsResponse";
import { ModelLabTag } from "./ModelLabTag";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ModelLabFacetKeysType: ["facet_keys"],
    ModelLabFacetType: ["parameter", "attribute", "tag", "metric"],
    ModelLabFacetValuesType: ["facet_values"],
    ModelLabProjectArtifactsType: ["project_files"],
    ModelLabProjectFacetType: ["tag"],
    ModelLabProjectType: ["projects"],
    ModelLabRunArtifactsType: ["artifacts"],
    ModelLabRunStatus: [
      "pending",
      "running",
      "completed",
      "failed",
      "killed",
      "unresponsive",
      "paused",
    ],
    ModelLabRunType: ["runs"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ModelLabArtifactInfo: ModelLabArtifactInfo,
    ModelLabArtifactObjectInfo: ModelLabArtifactObjectInfo,
    ModelLabFacetKeysAttributes: ModelLabFacetKeysAttributes,
    ModelLabFacetKeysData: ModelLabFacetKeysData,
    ModelLabFacetKeysResponse: ModelLabFacetKeysResponse,
    ModelLabFacetValuesAttributes: ModelLabFacetValuesAttributes,
    ModelLabFacetValuesData: ModelLabFacetValuesData,
    ModelLabFacetValuesResponse: ModelLabFacetValuesResponse,
    ModelLabMetricStatRange: ModelLabMetricStatRange,
    ModelLabMetricSummary: ModelLabMetricSummary,
    ModelLabNumericRange: ModelLabNumericRange,
    ModelLabPageMeta: ModelLabPageMeta,
    ModelLabPageMetaPage: ModelLabPageMetaPage,
    ModelLabPaginationLinks: ModelLabPaginationLinks,
    ModelLabProjectArtifactsAttributes: ModelLabProjectArtifactsAttributes,
    ModelLabProjectArtifactsData: ModelLabProjectArtifactsData,
    ModelLabProjectArtifactsResponse: ModelLabProjectArtifactsResponse,
    ModelLabProjectAttributes: ModelLabProjectAttributes,
    ModelLabProjectData: ModelLabProjectData,
    ModelLabProjectResponse: ModelLabProjectResponse,
    ModelLabProjectsResponse: ModelLabProjectsResponse,
    ModelLabRunArtifactsAttributes: ModelLabRunArtifactsAttributes,
    ModelLabRunArtifactsData: ModelLabRunArtifactsData,
    ModelLabRunArtifactsResponse: ModelLabRunArtifactsResponse,
    ModelLabRunAttributes: ModelLabRunAttributes,
    ModelLabRunData: ModelLabRunData,
    ModelLabRunParam: ModelLabRunParam,
    ModelLabRunResponse: ModelLabRunResponse,
    ModelLabRunsResponse: ModelLabRunsResponse,
    ModelLabTag: ModelLabTag,
  },
};
