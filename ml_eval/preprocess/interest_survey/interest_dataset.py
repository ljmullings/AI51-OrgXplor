from __future__ import annotations
# Data processing
import pandas as pd
import numpy as np

# Utility
from typing import List,Tuple

class InterestSurveyDataset:
    def __init__(self, file: str,
                 include_extracurricular: bool=True,
                 include_ethnic_id: bool=True,
                 include_faith_id: bool=True,
                 include_preferred_activity: bool=True,
                 include_availability: bool=True,
                 include_achieve: bool=True,
                 include_remind_pref: bool=True,
                 include_major: bool=True,
                 include_join_ethnic: bool=True,
                 include_join_faith: bool=True,
                 include_attend_freq: bool=True,
                 include_academic: bool=True,
                 include_diversity: bool=True,
                 ):
        self._df: pd.DataFrame = pd.read_csv(file)

        extracurricular_keys: List[str] = self._get_df_keys_prefixed("Extracurricular: ")
        ethnic_id_keys: List[str] = self._get_df_keys_prefixed("Ethnic Identity: ")
        faith_keys: List[str] = self._get_df_keys_prefixed("Faith: ")
        activity_keys: List[str] = self._get_df_keys_prefixed("Activity: ")
        availability_keys: List[str] = self._get_df_keys_prefixed("Time Available: ")
        achieve_keys: List[str] = self._get_df_keys_prefixed("Hope to Achieve: ")
        remind_keys: List[str] = self._get_df_keys_prefixed("Remind Preference: ")
        major_keys: List[str] = self._get_df_keys_prefixed("Major: ")

        join_ethnic_keys: List[str] = self._get_df_keys_prefixed("Join Ethnic Group: ")
        join_faith_keys: List[str] = self._get_df_keys_prefixed("Join Faith Group: ")
        attend_freq_keys: List[str] = self._get_df_keys_prefixed("Attendance Frequency: ")
        academic_keys: List[str] = self._get_df_keys_prefixed("Events for Academic Support: ")
        diversity_keys: List[str] = self._get_df_keys_prefixed("Events for Diversity and Inclusion: ")
        
        # Feature keys in order
        feature_keys_include: List[Tuple[str,str]] = [\
            (extracurricular_keys, include_extracurricular), \
            (ethnic_id_keys, include_ethnic_id), \
            (faith_keys, include_faith_id), \
            (activity_keys, include_preferred_activity), \
            (availability_keys, include_availability), \
            (achieve_keys, include_achieve), \
            (remind_keys, include_remind_pref), \
            (major_keys, include_major), \
            (join_ethnic_keys, include_join_ethnic), \
            (join_faith_keys, include_join_faith), \
            (attend_freq_keys, include_attend_freq), \
            (academic_keys, include_academic), \
            (diversity_keys, include_diversity) \
        ]
        self._feature_keys: List[str] = []
        for keys,include in feature_keys_include:
            if include:
                self._feature_keys += keys
        
    def _get_df_keys_prefixed(self, item: str) -> List[str]:
        return [
            key for key in self._df.keys()
            if item==key[:len(item)]
        ]

    def __len__(self) -> int:
        return len(self._df)
    
    def __getitem__(self, idx: int) -> np.ndarray:
        row: pd.Series = self._df.iloc[idx]
        return np.array(
            [row[key] for key in self._feature_keys]
        )
    
    def get_feature_names(self) -> List[str]:
        return self._feature_keys.copy()

if __name__=="__main__":
    dataset = InterestSurveyDataset("../../datasets/orgxplor_interest_responses_processed.csv")
    print("Feature Names:\n\t" + "\n\t".join(dataset.get_feature_names()))

    print(f"dataset[0]: {dataset[0]}")
    print(f"len(dataset): {len(dataset)}")
    
    print("Iteration Tests:")
    for idx,item in enumerate(dataset):
        if idx >= 5: break
        print(f"{idx}: {item}")
    
    print("Full Iteration: ", end="")
    for idx,item in enumerate(dataset):
        pass

    print("Success")

    dataset = InterestSurveyDataset("../../datasets/orgxplor_interest_responses_processed.csv",
                                    include_availability=False,
                                    include_ethnic_id=False,
                                    include_faith_id=False)
    print(f"dataset[1]: {dataset[1]}")
    print("Feature Names:\n\t" + "\n\t".join(dataset.get_feature_names()))